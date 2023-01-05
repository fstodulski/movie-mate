import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import axios from 'axios';
import { load } from 'cheerio';
import { StatusCodes } from 'http-status-codes';
import { isEmpty } from 'ramda';

import { db } from '$lib/server/core/providers/db.provider';
import { createResponse } from '$lib/server/utils/create-response';

export const GET: RequestHandler = async ({ url }) => {
  const movieId = await url.searchParams.get('movieId');

  if (!movieId) throw error(StatusCodes.BAD_REQUEST, 'Missing movieId');

  const movieToProviders = await db.movieToProvider.findMany({
    where: {
      movie_id: movieId
    }
  });

  if (isEmpty(movieToProviders)) {
    const html = await axios.get(
      `https://www.themoviedb.org/movie/${movieId}/watch?translate=false&locale=PL`
    );

    const prov: Array<any> = [];
    const images: Array<any> = [];
    const fullResponse: Array<any> = [];

    const $ = load(html.data);
    const providers = $('ul.providers');
    const count = providers.length;

    for (let i = 0; i < count; i++) {
      const ul = await providers[i];

      const li = await $(ul).find('li');
      const liCount = li.length;

      for (let z = 0; z < liCount; z++) {
        const isVisible = li[z].attributes.filter((el) => !el.value.includes('hide'));

        if (isVisible) {
          const child = await $(li[z]).find('div>a').attr('href');
          const img = $(li[z]).find('div>a>img').attr('src');

          prov[i] = child;
          images[i] = img;
        }
      }
    }

    [...new Set(images)].forEach((image, index) => {
      fullResponse.push({
        img: `https://www.themoviedb.org${image}`,
        provider: prov[index]
      });
    });

    const res = await Promise.all(
      fullResponse.map(async ({ img, provider }, index) => {
        return await db.movieToProvider.create({
          data: {
            movie_id: movieId!,
            image_url: img,
            provider_url: provider
          }
        });
      })
    );

    return createResponse(res, {
      status: StatusCodes.OK
    });
  }

  return createResponse(movieToProviders, {
    status: StatusCodes.OK
  });
};

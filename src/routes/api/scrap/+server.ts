import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { chromium } from '@playwright/test';
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
    const pw = await chromium.launch({
      headless: true
    });

    const page = await pw.newPage();
    await page.goto(`https://www.themoviedb.org/movie/${movieId}/watch?translate=false&locale=PL`);

    const providers = await page.locator('ul.providers');
    const count = await providers.count();

    const prov: Array<any> = [];
    const images: Array<any> = [];
    const fullResponse: Array<any> = [];

    for (let i = 0; i < count; i++) {
      const ul = await providers.nth(i);

      const li = await ul.locator('li');
      const liCount = await li.count();

      for (let z = 0; z < liCount; z++) {
        const isHidden = await li.nth(z).isVisible();
        const child = await li.nth(z).locator('div>a').getAttribute('href');
        const img = await li.nth(z).locator('div>a>img').getAttribute('src');

        if (isHidden) {
          prov.push(child);
          images.push(img);
        }
      }
    }

    [...new Set(images)].forEach((image, index) => {
      fullResponse.push({
        img: `https://www.themoviedb.org${image}`,
        provider: prov[index]
      });
    });

    await pw.close();

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

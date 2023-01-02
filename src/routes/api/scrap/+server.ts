import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { chromium } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';

import { createResponse } from '$lib/server/utils/create-response';

export const GET: RequestHandler = async ({ url }) => {
  const movieId = await url.searchParams.get('movieId');

  if (!movieId) throw error(StatusCodes.BAD_REQUEST, 'Missing movieId');

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

  console.log(prov);

  [...new Set(images)].forEach((image, index) => {
    fullResponse.push({
      img: `https://www.themoviedb.org${image}`,
      provider: prov[index]
    });
  });

  await pw.close();

  return createResponse(fullResponse, {
    status: StatusCodes.OK
  });
};

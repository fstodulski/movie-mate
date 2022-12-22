import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import type { CompletionsBodyReq } from '$lib/core/repositories/openai.repository';
import { OpenaiHttpProvider } from '$lib/server/core/providers/openai-http.provider';
import { StatusCodes } from 'http-status-codes';

const DEFAULTS = {
  model: 'text-davinci-003',
  temperature: 0.2,
  max_tokens: 300,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6
};

export const POST: RequestHandler = async ({ request }) => {
  const { prompt }: CompletionsBodyReq = await request.json();

  const res = await OpenaiHttpProvider.post(API_ENDPOINTS.openai.completions, {
    ...DEFAULTS,
    prompt
  });

  if (!res.data) throw error(StatusCodes.CONFLICT);

  return new Response(JSON.stringify(res.data.choices[0].text));
};

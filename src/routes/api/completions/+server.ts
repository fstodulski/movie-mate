import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';
import { length } from 'ramda';
import { z } from 'zod';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import type { CompletionsBodyReq } from '$lib/core/repositories/openai.repository';
import { OpenaiHttpProvider } from '$lib/server/core/providers/openai-http.provider';
import { identifier, ratelimit } from '$lib/server/core/providers/redis.provider';
import { createResponse } from '$lib/server/utils/create-response';

const DEFAULTS = {
  model: 'text-davinci-003',
  temperature: 0.2,
  max_tokens: 300,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: ['\n']
};

const _openAiResponse = z.object({
  choices: z.array(
    z.object({
      text: z.string()
    })
  )
});

type OpenAIResponse = z.infer<typeof _openAiResponse>;

export const POST: RequestHandler = async ({ request }) => {
  const { success } = await ratelimit.limit(identifier);

  if (!success) throw error(StatusCodes.FORBIDDEN, 'Too many requests');

  const { prompt }: CompletionsBodyReq = await request.json();

  if (!prompt || length(prompt) === 0) {
    return createResponse(
      {
        error: 'Missing prompt'
      },
      {
        status: StatusCodes.BAD_REQUEST
      }
    );
  }

  const res = await OpenaiHttpProvider.post<OpenAIResponse>(API_ENDPOINTS.openai.completions, {
    ...DEFAULTS,
    prompt
  });

  if (!res.data) throw error(StatusCodes.CONFLICT);

  return createResponse(res.data.choices[0].text);
};

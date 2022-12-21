import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { OpenaiHttpProvider } from '$lib/server/core/providers/openai-http.provider';
import { StatusCodes } from 'http-status-codes';

const MOCk = {
  model: 'text-davinci-003',
  prompt:
    'Human: Hi There\n\nRobot: Hi! How can I help you?Human: Would you suggest a movie for tonight?\n\nRobot: Sure! How about a romantic comedy like "The Notebook" or an action movie like "Die Hard"\n\nHuman: I will be watching with my girlfriend - would recommend something?',
  temperature: 0.9,
  max_tokens: 250,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: [' Human:', ' AI:']
};
export const POST: RequestHandler = async () => {
  const res = await OpenaiHttpProvider.post(API_ENDPOINTS.openai.completions, MOCk);

  console.log(res.data);

  if (!res.data) throw error(StatusCodes.CONFLICT);

  return new Response();
};

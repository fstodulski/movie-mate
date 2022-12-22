import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiClientProvider } from '$lib/core/providers/api-client.provider';
import { z } from 'zod';

const CompletionsBodyReq = z
  .object({
    prompt: z.string()
  })
  .required();
export type CompletionsBodyReq = z.infer<typeof CompletionsBodyReq>;

const completions = async (body: CompletionsBodyReq) => {
  try {
    const res = await ApiClientProvider.post(API_ENDPOINTS.api.completions, body);

    if (!res.data) return null;

    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const OpenaiRepository = {
  completions
};

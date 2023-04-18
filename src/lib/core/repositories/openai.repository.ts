import { z } from 'zod';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';

const CompletionsBodyReq = z
  .object({
    prompt: z.string()
  })
  .required();
export type CompletionsBodyReq = z.infer<typeof CompletionsBodyReq>;

const completions = async (body: CompletionsBodyReq) => {
  try {
    const res = await apiClient.post(API_ENDPOINTS.api.completions, body).json();

    if (res.data) return null;

    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const OpenaiRepository = {
  completions
};

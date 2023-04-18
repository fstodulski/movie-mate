import type { Session } from '@supabase/supabase-js';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { responseHandler } from '$lib/core/utils/response-handler';

const login = async (session: Session) => {
  return apiClient
    .url(API_ENDPOINTS.auth.signInWithGoogle)
    .post({
      email: session.user.email,
      googleId: session.user.googleId
    })
    .json(responseHandler<any>);
};

export const AuthRepository = {
  login
};

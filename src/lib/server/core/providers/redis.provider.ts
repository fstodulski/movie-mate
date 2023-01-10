import { dev } from '$app/environment';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from '$env/static/private';

export const ratelimit = new Ratelimit({
  redis: dev
    ? new Redis({
        url: UPSTASH_REDIS_REST_URL,
        token: UPSTASH_REDIS_REST_TOKEN
      })
    : Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '30 s')
});

export const identifier = 'api';

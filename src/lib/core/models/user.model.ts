import { z } from 'zod';

import type { ChatHistory } from '$lib/core/models/chat-history.model';

const User = z.object({
  id: z.string(),
  email: z.string(),
  createdAt: z.string(),
  modifiedAt: z.string()
});

export type User = z.infer<typeof User> & { chatHistories?: ChatHistory };

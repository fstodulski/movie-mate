import type { User } from '$lib/core/models/user.model';
import { z } from 'zod';

const ChatHistory = z.object({
  id: z.string(),
  content: z.string(),
  createdAt: z.string(),
  modifiedAt: z.string()
});

export type ChatHistory = z.infer<typeof ChatHistory> & { user: User };

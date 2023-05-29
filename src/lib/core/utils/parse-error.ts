import type { WretchError } from 'wretch';

export const parseError = (e: WretchError | unknown): { statusCode: number; message: string } => {
  return {
    statusCode: e.json.statusCode,
    message: e.json.message
  };
};

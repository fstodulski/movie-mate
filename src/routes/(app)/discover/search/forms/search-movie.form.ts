import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

export const SearchMovieFormSchema = z.object({
  name: z.string().nonempty().min(2)
});

export type SearchMovieForm = z.infer<typeof SearchMovieFormSchema>;

export const searchMovieFormBuilder = async () => await superValidate(SearchMovieFormSchema);

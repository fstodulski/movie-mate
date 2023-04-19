import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
  signOut: async ({ locals }) => {
    console.log('dupa');
    const { error, data } = await locals.supabase.auth.signOut();

    console.log(data, error);
    console.log(error);
    if (error) {
      throw new Error(error.message);
    }
  }
};

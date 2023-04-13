// import type { RequestHandler } from '@sveltejs/kit';
// import type { AuthSession } from '@supabase/supabase-js';
// import { StatusCodes } from 'http-status-codes';
// import { isNil } from 'ramda';
//
// export const POST: RequestHandler = async ({ request }) => {
//   const body = await parseBody<AuthSession>(request);
//
//   const user = await db.user.findUnique({
//     where: {
//       google_user_id: body.user.id
//     }
//   });
//
//   if (isNil(user)) {
//     await db.$transaction(async (tx) => {
//       const newUser = await tx.user.create({
//         data: {
//           google_user_id: body.user.id,
//           phone: body.user.phone || '',
//           email: body.user.email || ''
//         }
//       });
//
//       const newWatchlist = await tx.watchList.create({
//         data: {
//           name: 'All',
//           userId: newUser.id
//         }
//       });
//     });
//
//     return createResponse(body, { status: StatusCodes.OK });
//   }
//
//   return createResponse(body, { status: StatusCodes.OK });
// };

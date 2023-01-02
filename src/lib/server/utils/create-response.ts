export const createResponse = (data: any, init?: ResponseInit | undefined): Response => {
  const response = new Response(JSON.stringify(data), {
    ...init
  });

  response.headers.set('Content-type', 'application/json');
  return response;
};

import { handleInquiry } from './api/inquiry';

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/inquiry') {
      if (request.method === 'POST') {
        return handleInquiry(request, env);
      }
      return new Response('Method Not Allowed', { status: 405 });
    }

    return env.ASSETS.fetch(request);
  }
} satisfies ExportedHandler<Env>;
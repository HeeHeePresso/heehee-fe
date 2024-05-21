import { HttpResponse, bypass, http } from 'msw';
import { makeSuccessBody } from '@/mocks/getJsonBody';

const handlers = [
  http.get('/home', async ({ request }) => {
    try {
      const res = await fetch(bypass(request)).then(response => response.json());
      return HttpResponse.json(makeSuccessBody(res), { status: 200 });
    } catch (e) {
      return HttpResponse.json({ error: 'Not Authorized' }, { status: 401 });
    }
  }),
];

export default handlers;

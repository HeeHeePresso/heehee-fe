import { HttpResponse, bypass, http } from 'msw';
import { makeSuccessBody } from '@/mocks/getJsonBody';
import { eventUrls, menuInfos } from '@/mocks/home/fixture';

const handlers = [
  http.get('/home', async ({ request }) => {
    try {
      const res = await fetch(bypass(request)).then(response => response.json());
      return HttpResponse.json(makeSuccessBody(res), { status: 200 });
    } catch (e) {
      return HttpResponse.json(makeSuccessBody({ eventUrls, menuInfos }), { status: 200 });
    }
  }),
];

export default handlers;

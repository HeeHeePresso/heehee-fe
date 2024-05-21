import { HttpResponse, http } from 'msw';
import { menuData } from '@/data/menuData';

const handler = [
  http.get('/menu', () => {
    return HttpResponse.json(menuData);
  }),
];

export default handler;

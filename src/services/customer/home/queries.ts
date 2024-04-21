import { createQueryKeys } from '@lukemorales/query-key-factory';
import * as home from '@/services/customer/home';

export const homeQueries = createQueryKeys('home', {
  getHome: {
    queryKey: ['HOME_DATA'],
    queryFn: home.getHome,
  },
});

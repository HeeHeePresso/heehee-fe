import request from '@/services/request';
import type { ResHomeData } from '@/services/customer/home/home.types';

const PREFIX = '/home';

export const getHome = () => request.get<ResHomeData>(`${PREFIX}?userId=1`);

import homeHandlers from '@/mocks/home/handlers';
import menuHandler from '@/mocks/menu/handlers';
import type { RequestHandler } from 'msw';

const handlers: RequestHandler[] = [...homeHandlers, ...menuHandler];

export default handlers;

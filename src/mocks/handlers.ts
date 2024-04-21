import homeHandlers from '@/mocks/home/handlers';
import type { RequestHandler } from 'msw';

const handlers: RequestHandler[] = [...homeHandlers];
export default handlers;

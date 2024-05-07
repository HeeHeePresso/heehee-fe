import { inferQueryKeyStore, mergeQueryKeys } from '@lukemorales/query-key-factory';
import { homeQueries } from '@/services/customer/home/queries';

const queries = mergeQueryKeys(homeQueries);

export type QueryKeys = inferQueryKeyStore<typeof queries>;

export default queries;

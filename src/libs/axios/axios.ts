import axiosBase from 'axios';
import qs from 'qs';
import type { ErrorRes } from './axios.types';

/** todo: 실제 API 구조에 맞게 변경 필요!! **/
export class ApiError {
  message: string;
  code: number;
  title?: string;

  constructor(err: ErrorRes) {
    this.message = err.message || '예상하지 못한 오류가 발생했어요';
    this.code = err.code ?? err.status;
    this.title = err.title;
  }
}

const axios = axiosBase.create({
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'comma' }),
});

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  response => {
    return Promise.reject(new ApiError(response.response || {}));
  }
);

export default axios;

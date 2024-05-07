import axios from '@/libs/axios';
import type { AxiosRequestConfig } from 'axios';

type Url = `/${string}`;

const request = {
  get<R = any, D = any>(url: Url, config?: AxiosRequestConfig<D>) {
    return axios.get<R, R>(url, config);
  },
  post<R = any, D = any>(url: Url, data?: D, config?: AxiosRequestConfig<D>) {
    return axios.post<R, R, D>(url, data, config);
  },
  put<R = any, D = any>(url: Url, data?: D, config?: AxiosRequestConfig<D>) {
    return axios.put<R, R, D>(url, data, config);
  },
  delete<R = any, D = any>(url: Url, config?: AxiosRequestConfig<D>) {
    return axios.delete<R, R, D>(url, config);
  },
};

export default request;

import axios from 'axios';
//import Auth from './../acl/auth';

import { environment } from 'src/environments/environment';

const api = axios.create({
  baseURL: `${environment.apiurl}/`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});

api.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log({ error });
    throw error;
  }
);

export { api };

import axios from 'axios';

const BASE_URL = 'https://api.plkey.app';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,

  paramsSerializer: function (params) {
    return new URLSearchParams(params).toString();
  },
  timeout: 3000,
});

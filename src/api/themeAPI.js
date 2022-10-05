import { axiosInstance } from './axios-instance';

const themeApi = {
  getCategoryData: async () => {
    const { data } = await axiosInstance.get('/theme/category');
    return data;
  },
  getThemeData: async (category_name) => {
    const { data } = await axiosInstance.get('/theme', {
      params: { category: category_name },
    });
    return data;
  },
  getThemeDetailData: async (id) => {
    const { data } = await axiosInstance.get(`/theme/${id}`);
    return data;
  },
};

export default themeApi;

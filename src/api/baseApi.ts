import axios from 'axios';

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

const baseApi = axios.create({
  baseURL: BASE_API_URL,
});

export default baseApi;

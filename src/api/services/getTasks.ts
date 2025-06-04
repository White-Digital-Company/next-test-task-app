import authApi from '../baseApi';
import { Task } from '@/types/task';

export const getTasks = async (): Promise<Task[]> => {
  const response = await authApi.get('/tasks');
  return response.data;
};

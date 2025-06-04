import { useQuery } from '@tanstack/react-query';
import { getTasks } from '@/api/services/getTasks';
import { Task } from '@/types/task';

export const useTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: getTasks,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};

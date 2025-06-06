import { useQuery } from '@tanstack/react-query';
import { getTasks } from '@/api/services/getTasks';
import { Task } from '@/types/task';
import { TASK_STATUSES } from '@/constants/taskStatuses';

type TasksByStatus = Record<(typeof TASK_STATUSES)[number]['key'], Task[]>;

export const useTasks = () => {
  return useQuery<Task[], Error, { tasksByStatus: TasksByStatus; raw: Task[] }>(
    {
      queryKey: ['tasks'],
      queryFn: getTasks,
      staleTime: 5 * 60 * 1000,
      retry: 2,
      select: (tasks) => {
        const tasksByStatus = TASK_STATUSES.reduce((acc, { key }) => {
          acc[key] = tasks.filter((t) => t.status === key);
          return acc;
        }, {} as TasksByStatus);

        return { tasksByStatus, raw: tasks };
      },
    },
  );
};

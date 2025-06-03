import { useQuery } from '@tanstack/react-query';
import type { Task } from '../types/task';
import { getTasksQueryOptions } from '../api/get-tasks';

export function useTasksGroupedByStatus() {
    return useQuery({
        ...getTasksQueryOptions(),
        select: (allTasks: Task[]) => {
            const todo = allTasks.filter((task) => task.status === 'to-do');
            const inProgress = allTasks.filter((task) => task.status === 'in-progress');
            const inReview = allTasks.filter((task) => task.status === 'review');
            const completed = allTasks.filter((task) => task.status === 'completed');
            return { todo, inProgress, inReview, completed };
        },
    });
}

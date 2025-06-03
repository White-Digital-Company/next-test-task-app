import type { Task } from '../types/task';

export async function getTasks(): Promise<Task[]> {
    const res = await fetch('https://683857ff2c55e01d184cee44.mockapi.io/api/v1/tasks');
    if (!res.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return res.json();
}

export const getTasksQueryOptions = () => {
    return {
        queryKey: ['tasks'],
        queryFn: () => getTasks(),
    } as const;
};

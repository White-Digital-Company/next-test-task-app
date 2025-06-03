import type { Task } from '../types/task';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function getTasks(): Promise<Task[]> {
    const res = await fetch(`${BASE_URL}/tasks`);
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

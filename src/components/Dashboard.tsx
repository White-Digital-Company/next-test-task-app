'use client';

import { useQuery } from '@tanstack/react-query';
import { Task } from '@/types/task';

async function fetchTasks(): Promise<Task[]> {
    const response = await fetch('https://683857ff2c55e01d184cee44.mockapi.io/api/v1/tasks');
    return response.json();
}

export default function Dashboard() {
    const { data, error, isLoading } = useQuery<Task[]>({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    });

    const todoTasks = data?.filter((task) => task.status === 'to-do');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {(error as Error).message}</div>;
    }

    return (
        <div>
            {todoTasks?.map((task) => (
                <div key={task.id}>
                    <div>{task.createdAt}</div>
                    <div>{task.title}</div>
                    <div>{task.description}</div>
                    <div>{task.status}</div>
                </div>
            ))}
        </div>
    );
}

'use client';

import { useQuery } from '@tanstack/react-query';
import { Task } from '@/types/task';
import TaskColumn from '@/components/TaskColumn';

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
    const inProgress = data?.filter((task) => task.status === 'in-progress');
    const inReview = data?.filter((task) => task.status === 'review');
    const inCompleted = data?.filter((task) => task.status === 'completed');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {(error as Error).message}</div>;
    }

    return (
        <div className="w-full overflow-x-auto">
            <div className="grid auto-cols-[minmax(260px,_1fr)] grid-flow-col gap-8">
                <TaskColumn tasks={todoTasks} status="To do" />
                <TaskColumn tasks={inProgress} status="In progress" />
                <TaskColumn tasks={inReview} status="Review" />
                <TaskColumn tasks={inCompleted} status="Completed" />
            </div>
        </div>
    );
}

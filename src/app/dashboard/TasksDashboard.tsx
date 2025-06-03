'use client';

import React from 'react';
import { useTasksGroupedByStatus } from '@/features/tasks/hooks/useTasks';
import TaskColumn from '@/features/tasks/components/TaskColumn';

export default function TasksDashboard() {
    const { data, isLoading, error } = useTasksGroupedByStatus();

    if (isLoading) {
        return <div>Loading…</div>;
    }
    if (error) {
        return <div>Error: {(error as Error).message}</div>;
    }

    const { todo, inProgress, inReview, completed } = data!;

    return (
        <div className="w-full overflow-x-auto">
            <div className="grid auto-cols-[minmax(260px,_1fr)] grid-flow-col gap-8">
                <TaskColumn tasks={todo} status="To do" />
                <TaskColumn tasks={inProgress} status="In progress" />
                <TaskColumn tasks={inReview} status="Review" />
                <TaskColumn tasks={completed} status="Completed" />
            </div>
        </div>
    );
}

import React from 'react';
import { dehydrate, QueryClient, HydrationBoundary } from '@tanstack/react-query';
import { getTasksQueryOptions } from '@/features/tasks/api/get-tasks';

import TasksDashboard from './TasksDashboard';
import PageHeader from '@/components/PageHeader';

export const metadata = {
    title: 'Dashboard',
    description: 'Tasks Dashboard',
};

export default async function DashboardPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(getTasksQueryOptions());

    const dehydratedState = dehydrate(queryClient);

    return (
        <div className="py-10 px-8 bg-bgPage flex-1 flex flex-col overflow-hidden">
            <PageHeader title="My Tasks" />
            <div className="flex-1 min-h-0 overflow-x-auto">
                <HydrationBoundary state={dehydratedState}>
                    <TasksDashboard />
                </HydrationBoundary>
            </div>
        </div>
    );
}

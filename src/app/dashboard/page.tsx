'use client';
import { PageHeading } from '@/components/PageHeading';
import { TaskCategory } from '@/components/TaskCategory';
import { TASK_STATUSES } from '@/constants/taskStatuses';
import { useTasks } from '@/hooks/useTasks';

export default function DashboardPage() {
  const { data, isLoading, error } = useTasks();

  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Error loading tasks</div>;
  if (!data) return null;

  const { tasksByStatus } = data;

  const maxTasksCount = Math.max(
    ...Object.values(tasksByStatus).map((tasks) => tasks.length),
  );

  return (
    <div className="flex flex-col gap-4">
      <PageHeading title="My Tasks" />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
        {TASK_STATUSES.map(({ key, label }) => (
          <TaskCategory
            key={key}
            title={label}
            tasks={tasksByStatus[key] ?? []}
            maxTasks={maxTasksCount}
          />
        ))}
      </div>
    </div>
  );
}

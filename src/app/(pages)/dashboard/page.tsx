'use client';
import { TaskCategory } from '@/components/TaskCategory';
import { TASK_STATUSES } from '@/constants/taskStatuses';
import { useTasks } from '@/hooks/useTasks';
import { getFormattedTodayDate } from '@/utils/getFormattedTodayDate';

export default function DashboardPage() {
  const { day, date } = getFormattedTodayDate();
  const { data: tasks, isLoading, error } = useTasks();

  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Error loading tasks</div>;

  const tasksByStatus = TASK_STATUSES.reduce(
    (acc, { key }) => {
      acc[key] = tasks?.filter((t) => t.status === key) || [];
      return acc;
    },
    {} as Record<(typeof TASK_STATUSES)[number]['key'], typeof tasks>,
  );

  const maxTasksCount = Math.max(
    ...Object.values(tasksByStatus).map((tasks) => tasks?.length || 0),
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-[20px] font-medium text-[#121212]">My Tasks</h1>
        <div className="text-sm">
          <span className="text-[#64C882] mr-1">{day}</span>
          <span className="text-[#AAAAAA]">{date}</span>
        </div>
      </div>
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

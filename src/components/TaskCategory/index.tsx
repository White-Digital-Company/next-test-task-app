import { Task } from '@/types/task';
import { TaskCard } from '../TaskCard';
import { EmptyTaskSlot } from '../EmptyTaskSlot';

type TaskCategoryProps = {
  title: string;
  tasks: Task[];
  maxTasks: number;
};

export function TaskCategory({ title, tasks, maxTasks }: TaskCategoryProps) {
  const emptyCount = Math.max(0, maxTasks - tasks.length);

  return (
    <section>
      <h2 className="font-medium text-base mb-2">
        {title} ({tasks.length})
      </h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      {[...Array(emptyCount)].map((_, idx) => (
        <EmptyTaskSlot key={`empty-${idx}`} className="hidden md:block" />
      ))}
    </section>
  );
}

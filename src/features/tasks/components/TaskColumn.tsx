import { Task } from '@/features/tasks/types/task';
import TaskCard from '@/features/tasks/components/TaskCard';

interface TaskColumnInterface {
    status: string;
    tasks: Task[] | undefined;
}

export default function TaskColumn({ status, tasks }: TaskColumnInterface) {
    return (
        <div>
            <h3 className="text-[16px] font-medium mb-4">
                {status} ({tasks?.length})
            </h3>
            <div className="flex flex-col gap-6">
                {tasks?.map((task) => (
                    <TaskCard
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        createdAt={task.createdAt}
                    />
                ))}
            </div>
        </div>
    );
}

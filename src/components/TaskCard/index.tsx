import { MoreHorizontal } from 'lucide-react';
import { Task } from '@/types/task';
import { Avatar } from '../ui/avatar';
import { TimeIcon } from '@/assets';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { formatToDayMonth } from '@/utils/formatToDayMonth';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="p-4 mb-4 rounded-xl bg-white flex flex-col justify-between min-h-[216px]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-base line-clamp-2">
          {capitalizeFirstLetter(task.title)}
        </h3>
        <MoreHorizontal className="w-4 h-4 text-[#AAAAAA] cursor-pointer" />
      </div>
      <p className="text-sm text-[#12121299] mb-2 line-clamp-4">
        {task.description}
      </p>
      <div className="flex justify-between items-center mt-auto">
        <div className="inline-flex items-center gap-1 text-xs text-white bg-[#64C882] rounded-md px-2 py-2">
          <TimeIcon />
          <span className="line-clamp-1">
            {formatToDayMonth(task.createdAt)}
          </span>
        </div>
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
          <Avatar className="bg-[#C4C4C4] w-8 h-8" />
          <Avatar className="bg-[#C4C4C4] w-8 h-8" />
          <Avatar className="bg-[#C4C4C4] w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

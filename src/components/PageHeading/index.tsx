import { getFormattedTodayDate } from '@/utils/getFormattedTodayDate';

interface PageHeadingProps {
  title: string;
}

export function PageHeading({ title }: PageHeadingProps) {
  const { day, date } = getFormattedTodayDate();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[20px] font-medium">{title}</h1>
      <div className="text-sm">
        <span className="text-[#64C882] mr-1">{day}</span>
        <span className="text-[#AAAAAA]">{date}</span>
      </div>
    </div>
  );
}

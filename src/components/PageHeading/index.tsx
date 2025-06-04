import { getFormattedTodayDate } from '@/utils/getFormattedTodayDate';

type PageHeadingProps = {
  title: string;
};

export function PageHeading({ title }: PageHeadingProps) {
  const { day, date } = getFormattedTodayDate();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[20px] font-medium text-[#121212]">{title}</h1>
      <div className="text-sm">
        <span className="text-[#64C882] mr-1">{day}</span>
        <span className="text-[#AAAAAA]">{date}</span>
      </div>
    </div>
  );
}

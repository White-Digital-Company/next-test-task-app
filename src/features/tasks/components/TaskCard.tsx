import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Clock, Ellipsis } from 'lucide-react';

interface TaskCard {
    title: string;
    description: string;
    createdAt: string;
}

function formatDateToDayMonth(isoDate: string): string {
    const date = new Date(isoDate);
    const day = date.getUTCDate();
    const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
    return `${day} ${month}`;
}

export default function TaskCard({ title, description, createdAt }: TaskCard) {
    const dateCreatedAt = formatDateToDayMonth(createdAt);

    return (
        <Card className="pt-[18px] px-4 pb-6 h-54 justify-between hover:shadow-md">
            <CardHeader className="gap-6 p-0">
                <CardTitle className="text-[16px] text-black">{title}</CardTitle>
                <CardDescription className="text-[14px] text-textBlack opacity-60 line-clamp-2">
                    {description}
                </CardDescription>
                <CardAction className="text-textLightGray hover:text-textBlack">
                    <Ellipsis></Ellipsis>
                </CardAction>
            </CardHeader>
            <CardFooter className="p-0 justify-between">
                <div className="flex gap-1 items-center py-[6px] px-2 text-white text-[12px] bg-primaryGreen rounded-[4px]">
                    <Clock className="w-3 h-3" />
                    <span>{dateCreatedAt}</span>
                </div>
                <div className="relative w-[72px] h-8 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 absolute left-0 z-0 border border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 absolute left-5 z-10 border border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 absolute left-10 z-20 border border-white"></div>
                </div>
            </CardFooter>
        </Card>
    );
}

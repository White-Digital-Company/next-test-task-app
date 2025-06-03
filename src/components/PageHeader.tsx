import DateDisplay from '@/components/DateDisplay';

interface PageHeaderInterface {
    title: string;
}

export default function PageHeader({ title }: PageHeaderInterface) {
    return (
        <div className="mb-7">
            <h2 className="text-[20px] text-textBlack mb-1 font-medium">{title}</h2>
            <DateDisplay />
        </div>
    );
}

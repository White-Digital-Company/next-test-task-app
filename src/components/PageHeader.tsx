interface PageHeaderInterface {
    title: string;
}

export default function PageHeader({ title }: PageHeaderInterface) {
    const date = new Date();

    const weekday = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
    }).format(date);

    const day = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
    }).format(date);

    const month = new Intl.DateTimeFormat('en-US', {
        month: 'long',
    }).format(date);

    const year = date.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return (
        <div className="mb-7">
            <h2 className="text-[20px] text-[#121212] mb-1 font-medium">{title}</h2>
            <p className="text-[14px]">
                <span className="text-green-500">{weekday},</span>{' '}
                <span className="text-[#AAAAAA]">{formattedDate}</span>
            </p>
        </div>
    );
}

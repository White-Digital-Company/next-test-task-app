export function getCurrentWeekdayAndDate(): {
    weekday: string;
    formattedDate: string;
} {
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

    return { weekday, formattedDate };
}

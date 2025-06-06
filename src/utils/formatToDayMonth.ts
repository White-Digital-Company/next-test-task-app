import { format } from 'date-fns';

export function formatToDayMonth(dateString: string) {
  const date = new Date(dateString);
  return format(date, 'd MMMM');
}

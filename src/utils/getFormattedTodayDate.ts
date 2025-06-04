import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export function getFormattedTodayDate() {
  const today = new Date();
  const day = format(today, 'EEEE,', { locale: enUS });
  const date = format(today, 'dd MMMM yyyy', { locale: enUS });

  return { day, date };
}

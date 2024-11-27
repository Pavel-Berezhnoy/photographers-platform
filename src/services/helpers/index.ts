import utcToZonedTime from 'date-fns-tz/utcToZonedTime';

export function toUTC(date: Date) {
  return utcToZonedTime(date, 'Europe/Moscow');
}

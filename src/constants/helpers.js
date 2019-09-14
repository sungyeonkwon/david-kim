export const formatDate = date => {
  const MONTH_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  let hour = date.getHours();
  let mins = date.getMinutes();

  // Add trailing zero to time
  hour = hour < 10 ? '0' + hour : hour;
  mins = mins < 10 ? '0' + mins : mins;

  return `${day} ${month} ${year} ${hour}:${mins}`;
};

export const isFuture = t => {
  const today = new Date()
  const event = new Date(t)
  return event > today
}
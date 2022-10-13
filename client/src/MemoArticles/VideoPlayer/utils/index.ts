export const toTimeString = (second: number) => {
  const date = new Date(second * 1000);

  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getSeconds();

  const formattedHours = hh + ':';
  const formattedMinute = mm + ':';
  const formattedSecond = (ss < 10 ? '0' : '') + ss;

  return hh
    ? formattedHours + formattedMinute + formattedSecond
    : formattedMinute + formattedSecond;
};

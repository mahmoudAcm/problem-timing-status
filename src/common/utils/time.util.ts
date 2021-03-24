/**
 * retunrs the current time in seconds
 */
export function getTime() {
  const today = new Date();
  return (
    today.getHours() * (60 * 60) + today.getMinutes() * 60 + today.getSeconds()
  );
}

/**
 * returns the time in format of `hh:mm:ss`
 * @param { number } time time in seconds
 */
export function formatTime(time: number) {
  let hh: any = Math.floor(time / 60 ** 2);
  if (hh < 10) hh = '0' + hh;

  let mm: any = Math.floor((time % 60 ** 2) / 60);
  if (mm < 10) mm = '0' + mm;

  let ss: any = Math.floor((time % 60 ** 2) % 60);
  if (ss < 10) ss = '0' + ss;

  return `${hh}:${mm}:${ss}`;
}

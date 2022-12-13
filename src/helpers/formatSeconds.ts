export default function formatSeconds(sec: number) {
  const seconds = sec % 60;
  const minutes = Math.floor(sec / 60);

  const fill = (num: number) => (num < 10 ? "0" + num : num);

  return fill(minutes) + ":" + fill(seconds);
}

export interface TimerState {
  name: string;
  time: number;
  started: boolean;
  code: string;
  interval?: NodeJS.Timeout;
}

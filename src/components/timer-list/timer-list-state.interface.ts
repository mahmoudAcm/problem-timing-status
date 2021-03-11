export interface TimerListState {
  code: string;
  timers?: {
    reading: number;
    thinking: number;
    coding: number;
    debugging: number;
    [index: string]: number;
  };
}

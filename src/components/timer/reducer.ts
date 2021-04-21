import { loadData } from '../../common';

const code = loadData('code');
const status = loadData('status');
const timers = loadData(code) ? loadData(code).timers : {};

export const initialTimer: any = {
  timers,
  curTime: timers[status],
  isStarted: loadData('isStarted'),
  startedAt: loadData('startedAt'),
  timer: 0,
};

export function TimerReducer(
  state = initialTimer,
  { type, timers, status, startedAt, curTime }: any,
) {
  switch (type) {
    case 'INIT_TIMER':
      return {
        ...state,
        timers,
      };
    case 'SET_TIMER':
      return {
        ...state,
        curTime: curTime || state.timers[status],
      };
    case 'TIMER_CLICKED':
      return {
        ...state,
        timer: 0,
        isStarted: !state.isStarted,
        startedAt,
      };
    case 'INC_TIMER':
      return {
        ...state,
        timer: Date.now() - state.startedAt,
      };
    default:
      return state;
  }
}

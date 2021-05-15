import { loadData, saveData } from '../../common';

const code = loadData('code');
const status = loadData('status');
const timers = loadData(code) ? loadData(code).timers : {};

export const initialTimer: any = {
  timers,
  initialTime: timers[status],
  isStarted: loadData('isStarted') || saveData('isStarted', false),
  startedAt: loadData('startedAt'),
  curTime: 0,
};

export function TimerReducer(
  state = initialTimer,
  { type, timers, status, startedAt, initialTime }: any,
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
        initialTime: initialTime || state.timers[status],
      };
    case 'TIMER_CLICKED':
      return {
        ...state,
        curTime: 0,
        isStarted: !state.isStarted,
        startedAt,
      };
    case 'INC_TIMER':
      return {
        ...state,
        curTime: Date.now() - state.startedAt,
      };
    case 'RESET_TIMER_STATE':
      return {
        ...state,
        isStarted: false,
        startedAt: 0,
        curTime: 0,
      };
    default:
      return state;
  }
}

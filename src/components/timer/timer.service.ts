export class TimerService {
  private interval: any = null;

  constructor(private readonly component: HTMLElement, private time: number) {}
  start() {
    if (this.interval !== null) clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.interval !== null) this.time++;
      this.component.innerHTML = this.formatTime(this.time);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  getTime() {
    return this.time;
  }

  formatTime(time: number) {
    let hh: any = Math.floor(time / 60 ** 2);
    if (hh < 10) hh = '0' + hh;

    let mm: any = Math.floor((time % 60 ** 2) / 60);
    if (mm < 10) mm = '0' + mm;

    let ss: any = Math.floor((time % 60 ** 2) % 60);
    if (ss < 10) ss = '0' + ss;

    return `${hh}:${mm}:${ss}`;
  }
}

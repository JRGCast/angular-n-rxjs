import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // o observable timer se assemelha bastante ao setTimeout, e emitirá um sinal next e completed após determinado tempo:
    const timerFN = timer(2000).subscribe({
      next: v => console.log('TimerFN', v), // veja que ele emite 0 como valor
      complete: () => console.log('Completed')
    })

    // o timer assim equivale a 
    const timerObs$ = new Observable<number>(subscription => {
      const timeOutId = setTimeout(() => {
        // veja que sem o return, ocorrem efeitos mesmo após o unsubscribe de 1 seg:
        console.log('Common Observable stills on')
        subscription.next(0);
        subscription.complete();
      }, 2000)
      return () => {
        clearTimeout(timeOutId)
      }
    })

    const subscriptionObs = timerObs$.subscribe({
      next: v => console.log(v),
      complete: () => console.log('Completed')
    })

    setTimeout(() => {
      console.log('Unsubscribed')
      subscriptionObs.unsubscribe()
      timerFN.unsubscribe()
    }, 1000)
  }

}

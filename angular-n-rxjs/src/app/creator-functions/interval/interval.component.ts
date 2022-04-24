import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // o observable interval se assemelha bastante ao setInterval, e emitirá um sinal next com o contador interno começando em 0, incrementando o mesmo a cada intervalo definido, sem jamais emitir um completed
    const intervalFN = interval(1000).subscribe({
      next: v => console.log('IntervalFN', v),
      complete: () => console.log('Completed')
    })

    // o interval assim equivale a 
    const intervalObs$ = new Observable<number>(subscription => {
      let counter = 0;
      const intervalId = setInterval(() => {
        // veja que sem o return, ocorrem efeitos mesmo após o unsubscribe de 1 seg:
        console.log('Common Observable stills on')
        subscription.next(counter++);
      }, 1000)
      return () => {
        clearInterval(intervalId)
      }
    })

    const subscriptionObs = intervalObs$.subscribe({
      next: v => console.log('Common OBS', v),
      complete: () => console.log('Completed')
    })

    setTimeout(() => {
      console.log('Unsubscribed')
      subscriptionObs.unsubscribe()
      intervalFN.unsubscribe()
    }, 8000)
  }

}

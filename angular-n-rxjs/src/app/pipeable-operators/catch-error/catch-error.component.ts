import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable, of } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {

  /*
  O catchError irá capturar os erros emitidos por observables anteriores e, ao invés de emitir o objeto error ({next, error e completed}), ele fará um subscribe interno do erro que foi repassado, então repassará como um next 
  */
  constructor() { }

  ngOnInit(): void {
    const observableToCatchError$1 = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.error('FAILURE! 1')
      }, 3000)
    })

    const observableToCatchError$2 = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.error('FAILURE! 2')
      }, 5000)
    })

    observableToCatchError$1.pipe(
      catchError((v) => of(v))
    ).subscribe({
      next: v => console.log('this is the next of CatchError 1 with of as ending observable', v),
      error: err => console.log('ERROR 1', err),
      complete: () => console.log('this is the completed of catchError 1 Completed!')
    })

    observableToCatchError$2.pipe(
      catchError(() => EMPTY) // o empty imediatamente emite uma notificação de completed, completamente vazia (como o nome já indica), isto é, será 'capturado' no subscribe no complete, e não no next
    ).subscribe({
      next: v => console.log('this is the next CatchError 2 with EMPTY as ending observable', v),
      error: err => console.log('ERROR', err),
      complete: () => console.log('this is completed of catchError 2 COMPLETED! 2')
    })
  }
}



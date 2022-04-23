import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-creator-functions',
  templateUrl: './creator-functions.component.html',
  styleUrls: ['./creator-functions.component.scss']
})
export class CreatorFunctionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // o of é uma maneira de abstrair toda a criação e iteração sobre o observable, pois ele funciona como um 'forEach' para os argumentos passados para ele, e já emite um completed após. Ou seja, este of:
    of('RXJSOF', 'Alice', 'Ben', 'Charlie').subscribe({
      next: (value: string) => console.log(value),
      complete: () => console.log('Completed')
    })

    // é equivalente a 
    const names$ = new Observable<string>(subscriber => {
      subscriber.next('COMMON OBS');
      subscriber.next('Alice');
      subscriber.next('Ben');
      subscriber.next('Charlie')
      subscriber.complete();
    })

    names$.subscribe({
      next: (value: string) => console.log(value),
      complete: () => console.log('Completed')
    })

    // o from converte valores para uma promise, funciona de maneira muito similar ao of, mas ao invés de vários parâmetros, utiliza-se um único
from(['RXJS FROM', 'RX1', 'RX2']).subscribe({
  next: v => console.log('FROM', v),
  complete: () => console.log('Completed')
})
    // ou em suma, é isso (claro, há muito mais features e a performance é melhor, mas, basicamente, funciona assim mesmo):
    function ofHowItWorks(...args: any[]): Observable<any> {
      return new Observable<any>(subscriber => {
        for (let index = 0; index < args.length; index++) {
          subscriber.next(args[index])
        }
        subscriber.complete();
      })
    }
  }

}

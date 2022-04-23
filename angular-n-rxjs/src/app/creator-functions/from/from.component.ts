import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // o from converte valores para uma promise, funciona de maneira muito similar ao of, mas ao invés de vários parâmetros, utiliza-se um único, tendo um uso comum com arrays, promises e objetos
    from(['RXJS FROM', 'RX1', 'RX2']).subscribe({
      next: v => console.log('FROM', v),
      complete: () => console.log('Completed')
    })

    const promiseFrom = new Promise((resolve, reject) => {
      // resolve('Promise Resolved')
      // veja que o reject de uma promise cai no error no subscribe do observable
      reject('Promise rejected!')
    })

    const promiseObservable$ = from(promiseFrom);

    promiseObservable$.subscribe({
      next: v => console.log('PROMISE FROM', v),
      error: er => console.log('PROMISE FROM ERROR =>', er),
      complete: () => console.log('Completed')
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss']
})
export class AttentionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // tenha atenção porque o unsubscribe nem sempre terminará com toda a emissão de dados do observable
    const interval$: Observable<number> = new Observable(subscriber => {
      let countering = 1;
      let theInterval = setInterval(() => {
        console.log('Emitting value');
        subscriber.next(countering++)
      }, 1000)

      return () => {
        clearInterval(theInterval)
      }
    })

    const theSubscription = interval$.subscribe(value => console.log(value))

    // veja que mesmo após o unsubscribe, apesar de ter parado com o log do countering++, continua a logar o 'Emitting value'.
    // Isso acontece porque o subscriber realmente foi parado, contudo, os efeitos do setInterval permanecem.
    // Para que isso não aconteça, é necessária a lógica do Teardown, contida no return do observable acima
    setTimeout(() => { console.log('Unsubscribed'); theSubscription.unsubscribe() }, 8000)
  }


}

import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // o observable é basicamente uma função com callback, quando executado, emitirá uma 'notificação', podendo ser a next, error ou complete. Porém, sozinho, ele não as emite;
    const observable1$: Observable<string> = new Observable(subscriber => {
      console.log('Observable1 were executed')
      subscriber.next('Alice');
      subscriber.next('Joe');
      // subscriber.error({message: 'Nope'}) veja que após o error e o complete, há o encerramento do observable.
      // subscriber.next('Haw')
      subscriber.complete();

      return () => {
        console.log('Teardown happened')
      }
    })

    const observable2$: Observable<string> = new Observable(subscriber => {
      console.log('Observable2 were executed')
      subscriber.next('Starting timeouts, search for it after subscriber in console');
      setTimeout(() => { subscriber.next('First value, 1 seconds delay') }, 1000);
      setTimeout(() => { subscriber.next('Second value, 2 seconds delay') }, 2000);
      setTimeout(() => { subscriber.next('Third value, 4 seconds delay') }, 4000);

      // a fase de Teardown ocorre quando o observable é definitivamente fechado

      return () => {
        console.log('Teardown happened')
      }
    })

    // o observer é o que ditará o comportamento do observable, veja que os dois utilizam o next (bem como o error e complete, mas não mostrado aqui)
    const observer: Observer<string> = {
      next: (value: string) => { console.log('observer next logic is log the name =>', value) },
      error: err => console.log(err.message),
      complete: () => console.log('completed')
    };

    // o subscription é aquele que executa o observable. Ou seja, toda vez que for emitido um next pelo observable, e subscrito, executará a lógica do observer.
    // * atenção que a lógica de subscrição será executada enquanto houver dados, e somente finaliza com unsubscribe, error ou complete.
    const subscription1: Subscription = observable1$.subscribe(observer);
    const subscription2: Subscription = observable2$.subscribe(observer);

    // veja que sem aplicar um observer, isto é, uma lógica ao observable, nada acontece:
    console.log('Subscrição com o observer ->', subscription2)
    console.log('Subscrição sem observer =>', observable2$.subscribe())

    console.log(subscription1)
    // veja também o método unsubscribe em ação, que para todo o observable quando acionado. Perceba que dá para ver as notificações 1 e 2, mas não a 3, uma vez que esta última ocorre após 4 segundos, se o unsubscribe acontece em 3 segundos.
    setTimeout(() => { console.log('Unsubscribed'); subscription2.unsubscribe() }, 3000)
  }

}

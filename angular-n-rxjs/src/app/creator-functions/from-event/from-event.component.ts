import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('buttonTrigger') btnTrigger!: ElementRef

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    /*
 - o fromEvent consegue criar um observable a partir de eventos, tais como o DOM EventTarget, o Node EventEmitter e mesmo os jQUERY events;
 - assim pode-se criar observables a partir do click em um botão, o resize de uma janela e afins. 
 ** OBSERVABLES DE FROMEVENT NUNCA COMPLETAM! Então é necessário o unsubscribe
 - Os subscribes acabam funcionando de maneira semelhante ao addEventListener e os unsubscribes como removeEventListener (inclusive com o fromEvent, tais funções listeners são usadas 'por debaixo dos panos').
 */
    const btnEl = this.btnTrigger.nativeElement;
    const subscriptionFromEvt = fromEvent<PointerEvent>(btnEl, 'click').subscribe((theEvent: PointerEvent) => console.log(theEvent.type, theEvent.x, theEvent.y))

    // // o fromEvent acima seria o mesmo que:
    // const triggerClick$ = new Observable<PointerEvent>(subscription => {

    //   const clickFunction = (event: any) => {
    //     console.log('Event callback') // perceba que mesmo após o unsubscribe (sem o return) este log ainda é emitido
    //     subscription.next(event)
    //   }
    //  btnEl.addEventListener('click', clickFunction)

    //   return () => {
    //     btnEl.removeEventListener('click', clickFunction)
    //   }
    // })

    // const subscriptionEvt = triggerClick$.subscribe(evt => {
    //   console.log(evt.type, evt.x, evt.y)
    // })

    setTimeout(() => {
      console.log('Unsubscribed')
      // subscriptionEvt.unsubscribe()
      subscriptionFromEvt.unsubscribe() // e veja que aqui não é necessário o return para remover o eventListener
    }, 5000)
  }
}

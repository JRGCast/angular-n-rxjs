import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';

@Component({
  selector: 'app-the-subject',
  templateUrl: './the-subject.component.html',
  styleUrls: ['./the-subject.component.scss']
})
export class TheSubjectComponent implements OnInit {
  theSubject: Subject<string> = new Subject<string>();
  constructor() { }
  /* Subjects são um tipo de objeto especial, que contém as propriedades de Observable e Observer ao mesmo tempo.
  Ou seja, é possível fazer o .next e repassar comportamentos. Tem o comportamento de HotObservables, seu melhor uso é semelhante a um event emitter para multicasting */

  @ViewChild('subjectInput') subjectInputRef!: ElementRef
  @ViewChild('emitBtn') emitBtnRef!: ElementRef
  @ViewChild('subsBtn') subsBtnRef!: ElementRef

  ngAfterViewInit(): void {
    /*
    Ou seja, a cada nova subscrição que é feita, um novo emit ocorrerá ao clicar no emitBtn.
    2 subscrições, 2 emits com o valor do input, 5 subscrições, 5 emits, e assim vai.
    Atenção apenas para as notificações de erro e complete, que encerrarão todas as subscrições ativas.
    */

    fromEvent(this.emitBtnRef.nativeElement, 'click').subscribe(value => {
      console.log('clicked')
      this.theSubject.next(this.subjectInputRef.nativeElement.value)
    })

    fromEvent(this.subsBtnRef.nativeElement, 'click').subscribe(value => {
      console.log('NEW SUBSCRIPTION!')
      this.theSubject.subscribe(v => console.log(v))
    })
  }

  ngOnInit(): void {
  }

  emitBtn(inputtedValue: string) {
  }

  subscribeBtn(inputtedValue: any) {
  }
}

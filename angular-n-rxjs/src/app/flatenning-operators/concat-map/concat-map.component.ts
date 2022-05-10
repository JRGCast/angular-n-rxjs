import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, concatMap, EMPTY, fromEvent, map, Observable, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('searchInput') searchInputRef!: ElementRef
  @ViewChild('searchBtn') searchBtnRef!: ElementRef

  /*
  O concatMap é um dos flattening operators, pode ser um pouco complicado compreender seu funcionamento.
  Seu grande diferencial é que ele aguarda os valores emitidos na ordem em que chegam antes de mandar para o next.
  Ou seja, se eu faço duas requisições e, por qualquer motivo, a segunda resposta chega antes da primeira, o concatMap se certificará que primeiro atuará com a primeira resposta e, após, com a segunda. Por isso, um ótimo uso dele é com qualquer requisição que armazene valores num database
  */
  ngAfterViewInit(): void {
    // o maior problema aqui é que o concatMap repassa qualquer notificação, fazendo o inner subscribe antes disso, portanto, caso ocorra um erro, será repassado ao subscribe, que encerrará o observable, não sendo mais possível realizar pesquisas após
    fromEvent(this.searchBtnRef.nativeElement, 'click').pipe(
      tap(event => console.log(event)),
      map(() => this.searchInputRef.nativeElement.value),
      // uma maneira de repassar notificações com erros sem que a stream de eventos seja encerrada é utilizar o catchError dentro do concatMap:
      concatMap((mapped) => ajax(`https://random-data-api.com/api/${ mapped }/random_${ mapped }`).pipe(
        catchError((error) => { console.error('ERROR: ', error); return EMPTY }) // como é emitido o complete aqui dentro, então ele não chega ao subscribe, já que não existe um 'next' para a 'próxima fase'
      )),
    ).subscribe({
      next: v => {
        console.log(v);
      },
      error: err => {
        console.log(err)
      }
    }
    )
  }
  ngOnInit(): void {

    // de começo, vamos utilizar uma das funções do concatMap, que fará uma nova stream de dados a partir daqueles emitidos
    const source$ = new Observable(subscriber => {
      setTimeout(() => subscriber.next('A'), 2000);
      setTimeout(() => subscriber.next('B'), 5000);
    })

    console.log('App started')

    source$.pipe(
      concatMap(value => of(1, 2)) // veja que aqui não utilizamos o value.
      // ou seja, cada valor ali emitido será convertido em um observable de valores 1,2. Isto é, o next('A'), torna-se next(1,2), assim como o next('B')
    ).subscribe(v => console.log('Not using value emitted', v))
  }

  makeRequest(inputtedValue: string) {

  }
}

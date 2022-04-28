import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';

@Component({
  selector: 'app-combine-last',
  templateUrl: './combine-last.component.html',
  styleUrls: ['./combine-last.component.scss']
})
export class CombineLastComponent implements OnInit, AfterViewInit {

  result!: string

  constructor() { }
  @ViewChild('inputTemp') inputTempRef!: ElementRef
  @ViewChild('selectMeasure') selectMeasRef!: ElementRef

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    /*
    o combineLast funciona de maneira bem semelhante ao forkJoin, só começará a emitir valores se todos os seus observables dentro do array emitirem.
    Porém pegará os últimos resultados de todos os observables, independente de erro ou compleção.
    Um ótimo uso dele é quando há necessidade de constante atualização dos dados
    */
    const temperatureInputEvt$ = fromEvent(this.inputTempRef.nativeElement, 'input')
    const measureSelectEvt$ = fromEvent(this.selectMeasRef.nativeElement, 'input')

    combineLatest([temperatureInputEvt$, measureSelectEvt$]).subscribe(([tempInputted, measSelected]: any[]) => {
      const { value: tempValue } = tempInputted.target;
      const { value: measValue } = measSelected.target;

      switch (measValue) {
        case 'f-to-c':
          this.result = ((Number(tempValue) - 32) * 5 / 9).toFixed(2) + ' C°';
          break;
        default:
          this.result = (Number(tempValue) * 9 / 5 + 32).toFixed(2) + ' F°';
          break;
      }
    })
  }
}

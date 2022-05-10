import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  sliderValue = 0;

  constructor() { }

  @ViewChild('slider') sliderRef!: ElementRef
  /*
  O debounceTime aguarda X segundos e repassará apenas o último valor emitido na stream de eventos
  */

  ngAfterViewInit(): void {
    // veja que sem o debounceTime, cada mexidinha mínima ativa o subscribe, imagine o caos que seria se fossem http requests.
    fromEvent(this.sliderRef.nativeElement, 'input')
      .pipe(debounceTime(100),
        map(({ target: { value } }: any) => value) // aproveitando o map
      ).subscribe((v: any) => this.sliderValue = v)
  }

  ngOnInit(): void { }
}

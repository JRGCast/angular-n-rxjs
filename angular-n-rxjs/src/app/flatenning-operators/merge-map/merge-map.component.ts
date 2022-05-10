import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  /* O mergeMap é uma espécie de meio termo entre o concatMap e o switchMap. No caso, ele reemitirá todos os valores recebidos na ordem em que foram recebidos. Ou seja, se há 4 requisições, e a ordem de chegada das respostas for 2,1,4,3, assim será reemitido, contendo todas as respostas.
  É um prato cheio para memory leaks, mas deve ter seu uso. */
  constructor() { }

  ngOnInit(): void {
  }

}

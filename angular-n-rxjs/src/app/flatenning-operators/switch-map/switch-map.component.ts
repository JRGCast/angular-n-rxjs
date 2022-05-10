import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  /* Pode-se dizer que o switchMap troca os valores emitidos pelo último. Ou seja, se eu faço cinco requisições, e a primeira resposta que chegar for a quinta, e a última for a primeira, então o valor subscrito internamente será o da primeira, cancelando as demais. Portanto é altamente não recomendado para salvar dados em um database.
  Um bom uso para o switchMap é, por exemplo, pegar o último resultado/última resposta de um servidor, por exemplo de notícias */

  constructor() { }

  ngOnInit(): void {
  }

}

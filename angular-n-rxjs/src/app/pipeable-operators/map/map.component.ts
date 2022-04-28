import { Component, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  /* 
  map é um operador que se assemelha ao .map do JS em arrays. É possível interceptar valores emitidos e fazer alguma "transformação" de tais dados,
  por exemplo multiplicar todos os números recebidos pela stream de eventos por 2.
  Aqui vamos deixar o que fizemos lá no forkJoin muito mais legível e direto:
   */

  // ao invés de transformar os dados em que queremos dentro do subscribe, daquela maneira complicada, podemos transformar diretamente com o map

  randomFirstName$ = ajax('https://random-data-api.com/api/name/random_name').pipe(
    map((nameAjaxResponse: any) => nameAjaxResponse.response.first_name)
  )
  randomCapitalNation$ = ajax('https://random-data-api.com/api/nation/random_nation').pipe(
    map((captAjaxResponse: any) => captAjaxResponse.response.capital)
  )
  randomFoodDish$ = ajax('https://random-data-api.com/api/food/random_food').pipe(
    map((foodAjaxResponse: any) => foodAjaxResponse.response.dish)
  )

  answer: string = 'Fetch and a random answer will spawn';

  constructor() { }

  ngOnInit(): void { }

  fetchRandomT() {
    // com isso, podemos fazer um forkJoin muito mais limpo e simples de ler:
    forkJoin([this.randomFirstName$, this.randomCapitalNation$, this.randomFoodDish$]).subscribe(([name, capital, food]: Array<any>) => {
      this.answer = `${ name } is from ${ capital } and likes to eat ${ food }.`
    })
  }

}

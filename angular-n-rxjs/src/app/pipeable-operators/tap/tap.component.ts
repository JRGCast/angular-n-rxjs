import { Component, OnInit } from '@angular/core';
import { forkJoin, map, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  /*
  tap é mais usado para propósitos de debug, pois, pode interagir em qualquer momento da pipe stream e pegar apenas os valores ou side effects daquele momento.
  Para o exemplo, vamos utilizar novamente os dados do forkJoin inicial, e averiguar todos os passos para a transformação dos dados
  */

  randomFirstName$ = ajax('https://random-data-api.com/api/name/random_name')

  randomCapitalNation$ = ajax('https://random-data-api.com/api/nation/random_nation')

  randomFoodDish$ = ajax('https://random-data-api.com/api/food/random_food')

  answer = 'Correct answer will be here after fetching'

  constructor() { }

  ngOnInit(): void {
  }

  fetchRandomT() {
    forkJoin([this.randomFirstName$, this.randomCapitalNation$, this.randomFoodDish$]).pipe(
      tap(([nameAjaxRes, capAjaxRes, dishAjaxRes]: any[]) => {
        console.log('This is the first answer we get from fetching the random name', nameAjaxRes)
        console.log('This is the first answer we get from fetching the random capital', capAjaxRes)
        console.log('This is the first answer we get from fetching the random dish', dishAjaxRes)
      }),
      map(([nameAjax, capAjax, dishAjax]: any[]) => {
        return [nameAjax.response, capAjax.response, dishAjax.response]
      }),
      tap(([nameRes, capRes, dishRes]: any[]) => {
        console.log('This is the first mapping we do, extracting only the response of random name', nameRes)
        console.log('This is the first mapping we do, extracting only the response of random capital', capRes)
        console.log('This is the first mapping we do, extracting only the response of random dish', dishRes)
      }),
      map(([nameRes, capRes, dishRes]: any[]) => {
        return [nameRes.first_name, capRes.capital, dishRes.dish]
      }),
      tap(([nameRes, capRes, dishRes]: any[]) => {
        console.log('This is the second mapping, now we have only what we need from the response of random name', nameRes)
        console.log('This is the second mapping, now we have only what we need from the response of random capital', capRes)
        console.log('This is the second mapping, now we have only what we need from the response of random dish', dishRes)
        console.log('Now we only need one mapping to transform stream data into string')
      }),
      map(([firstName, capital, dish]) => {
        return `${ firstName } is from ${ capital } and likes ${ dish }.`
      }),
    ).subscribe({
      next: v => this.answer = v,
      error: err => console.log('Error: ', err)
    })
  }
}

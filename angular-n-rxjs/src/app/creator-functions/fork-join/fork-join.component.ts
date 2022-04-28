import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  randomName$ = ajax('https://random-data-api.com/api/name/random_name')
  randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation')
  randomFood$ = ajax('https://random-data-api.com/api/food/random_food')

  showErrorFirst = true

  answer: string = 'Fetch and a random answer will spawn';
  constructor() { }

  ngOnInit(): void {


  }

  fetchRandomT(): void {
    /*
o forkJoin aceita outros observáveis como fonte da stream de dados. O uso comum é passar um array de observables como fontes,
já que na subscrição, ele criará subscrições para todos os observables do array, aguardando a compleção dos mesmos, semelhante ao Promise.all,
e emitirá os últimos valores da stream de todos os observables.
Isso é útil, por exemplo, quando deseja fazer múltiplas chamadas http e aguardar por todas elas antes do próximo passo.
*/

    // por exemplo, para obter, com segurança, os seguintes dados (nome, nação e comida) e ordená-los nessa ordem, o forkJoin é uma opção viável,
    // já que sem ele, as respostas podem variar na ordem de compleção, o que poderia afetar o uso (às vezes a comida chegaria antes do nome, e por aí).
    forkJoin([this.randomName$, this.randomNation$, this.randomFood$]).subscribe(([rdmNameRes, rdmNationRes, rdmFoodRes]: any[]) => {
      const { response: responseFood } = rdmFoodRes;
      const { response: responseName } = rdmNameRes;
      const { response: responseNation } = rdmNationRes

      this.answer = `${ responseName.first_name } is from ${ responseNation.capital } and likes ${ responseFood.dish }`
      console.log(`${ responseName.first_name } is from ${ responseNation.capital } and likes ${ responseFood.dish }`)
    })
  }

  forkJoinErrorHandling() {
    /*
    Perceba que a lógica do forkJoin descarta todos os demais observables se qualquer um deles falhar, independente de quando ocorra.
    O erro de um fará com que o forkJoin emita o erro, descartando as demais respostas.
    */
    if (!this.showErrorFirst) {
      console.log('OBS SEND ERROR AFTER 5 SECONDS')
      const a$ = new Observable(subscriber => {
        setTimeout(() => {
          subscriber.next('First one, not subscribe error')
          subscriber.complete()
        }, 3000)
        return () => {
          console.log('First obs teardown')
        }
      })
      const b$ = new Observable(subscriber => {
        setTimeout(() => {
          subscriber.error('Second one, sent error!')
        }, 5000)
        return () => {
          console.log('Second obs teardown')
        }
      })
      forkJoin([a$, b$]).subscribe({
        next: value => console.log('ForkJoin Logic', value),
        error: err => console.log('ForkJoin Error => ', err)
      })
      this.showErrorFirst = !this.showErrorFirst;
    } else {
      console.log('OBS SEND ERROR AFTER 3 SECONDS')
      const a$ = new Observable(subscriber => {
        setTimeout(() => {
          subscriber.next('First one')
          subscriber.complete()
        }, 5000)
        return () => {
          console.log('First obs teardown')
        }
      })
      const b$ = new Observable(subscriber => {
        setTimeout(() => {
          subscriber.error('Second one, sent error!')
        }, 3000)
        return () => {
          console.log('Second obs teardown')
        }
      })
      forkJoin([a$, b$]).subscribe({
        next: value => console.log('ForkJoin Logic', value),
        error: err => console.log('ForkJoin Error => ', err)
      })
      this.showErrorFirst = !this.showErrorFirst;
    }
  }

}

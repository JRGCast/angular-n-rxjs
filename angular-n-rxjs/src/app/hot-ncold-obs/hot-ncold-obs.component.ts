import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-hot-ncold-obs',
  templateUrl: './hot-ncold-obs.component.html',
  styleUrls: ['./hot-ncold-obs.component.scss']
})
export class HotNColdObsComponent implements OnInit, AfterViewInit {

  // podemos resumir que um cold observable produz dados dentro de si próprio, então cada subscrição terá dados próprios, completamente independente de outras subscrições. Ex.: requisição http.

  // já os hot observables trazem dados de uma fonte comum, fazendo o multicast dos mesmos, logo, todas as subscrições são idênticas. Ex.: aplicar um observable para um click do mouse, ou mesmo um Subject.

  // ** É possível que um observable tenha o comportamento Cold e Hot ao mesmo tempo, bem como em qualquer ordem (começa cold e termina hot, e vice-versa)

  @ViewChild('helloButton') heloBtn!: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // um observable 'cold' é chamado assim por ter uma fonte de emissão de dados diferente, por exemplo uma request http é tida assim, já que cada requisição acaba sendo única. UM bom exemplo para diferenciar é o uso do ajax com esse endpoint, que retorna um resultado aleatório toda vez.
    // o ajax é uma especificação do http simples, já que retorna um observable completo, e com muitos mais dados
    const reqAjax$ = ajax('https://random-data-api.com/api/name/random_name');

    const ajaxSubs = reqAjax$.subscribe(response => {
      console.log('Inner ajax subs', response)
    })

    const reqHttp = this.http.get('https://random-data-api.com/api/name/random_name', { responseType: 'json' })
    // veja que o mesmo ocorre mesmo sem chamá-lo em um console, e mesmo chamado 2x, apesar das 2 subscrições, apenas uma resposta ajax acontece
    console.log('subscrição ajax 1', ajaxSubs)
    console.log('subscrição ajax 2', ajaxSubs)

    console.log('subscrevendo ajax1', reqAjax$.subscribe((value: any) => console.log('ajax1', value.response.first_name)))
    console.log('subscrevendo ajax2', reqAjax$.subscribe((value: any) => console.log('ajax2', value.response.first_name)))

    console.log('observable http', reqHttp.subscribe((value: any) => console.log('http', value.first_name)))
  }

  ngAfterViewInit(): void {
    console.log(this.heloBtn.nativeElement)
  }

  helloClick$(event: any) {
    const helloClickObs$ = new Observable<MouseEvent>(subscriber => {
      subscriber.next(event)
    })

    // é um Hot observable quando os eventos emitidos são da mesma fonte, ou seja, não importa o número de subscrições, os resultados emitidos sempre serão os mesmos. Aqui podemos chamar de 'multicast' também
    helloClickObs$.subscribe(event => console.log('Subs1', event.type, event.x, event.y))

    helloClickObs$.subscribe(event => console.log('Subs2', event.type, event.x, event.y))

    // inclusive façamos o experimento de colocar um novo subscribe após certo tempo, veja que, após ativado, emite os mesmos valores

    setTimeout(() => {
      console.log('Subscription 3 starts')
      helloClickObs$.subscribe(event =>
        console.log('Subscription 3', event.type, event.x, event.y)
      );
    }, 3000)
  }
}

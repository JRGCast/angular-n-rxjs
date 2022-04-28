import { Component, OnInit } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';

interface NewsResults {
  category: 'Business' | 'Sports',
  content: string
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  newsResult: NewsResults[] = []

  newsFeed$ = new Observable<NewsResults>(subscriber => {
    setTimeout(() => {
      subscriber.next({ category: 'Business', content: 'Xablau business news 1' })
    }, 1000)
    setTimeout(() => {
      subscriber.next({ category: 'Sports', content: 'Xablau sport news 1' })
    }, 2000)
    setTimeout(() => {
      subscriber.next({ category: 'Business', content: 'Xablau business news 2' })
    }, 3000)
    setTimeout(() => {
      subscriber.next({ category: 'Sports', content: 'Xablau sport news 2' })
    }, 4000)
    setTimeout(() => {
      subscriber.next({ category: 'Business', content: 'Xablau business news 3' })
    }, 5000)
    setTimeout(() => {
      subscriber.next({ category: 'Sports', content: 'Xablau sport news 3' })
    }, 6000)
  })

  constructor() { }

  /*
  o filter aqui funciona de maneira muito semelhante ao .filter do JS em arrays, permitindo a continuidade de dados que se encaixem em determinada condição, barrando aqueles que não passem.
  É possível manter o observable original, criando um novo observable a partir do original, mas com o filter, assim pode-se utilizar tanto o original quanto o filtrado.
  */
  ngOnInit(): void {


  }

  filterNews(category: string) {
    this.newsResult = [];
    this.newsFeed$.pipe(
      filter(currNews => category === currNews.category)
    ).subscribe(filteredNews => {
      this.newsResult.push(filteredNews)
    })
  }
}

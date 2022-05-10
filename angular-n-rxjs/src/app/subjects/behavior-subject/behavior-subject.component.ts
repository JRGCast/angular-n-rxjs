import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit, AfterViewInit {

  /* O behaviorSubject guardará o valor do último emit e instantaneamente enviará esse último valor para qualquer nova subscrição que ocorra. Inclusive ele permanece salvo mesmo após o reload da página. Ele necessariamente precisa ter um valor inicial */

  isLoggedIn$ = new BehaviorSubject<boolean>(false)
  constructor(private renderer: Renderer2) { }

  @ViewChild('loginBtn') loginBtnRef!: ElementRef
  @ViewChild('logoutBtn') logoutBtnRef!: ElementRef
  @ViewChild('navBar') navBarRef!: ElementRef

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.loginBtnRef, this.logoutBtnRef)
    // Navigation component
    this.isLoggedIn$.subscribe(bool => {
      this.navBarRef.nativeElement.innerText = bool.toString();
    })

    // Buttons component
    fromEvent(this.loginBtnRef.nativeElement, 'click').subscribe(() => {
      this.isLoggedIn$.next(true)
    })

    this.isLoggedIn$.subscribe(loggedIn => {
      if (loggedIn) {
        this.renderer.setStyle(this.loginBtnRef.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.logoutBtnRef.nativeElement, 'display', 'flex')
      } else {
        this.renderer.setStyle(this.loginBtnRef.nativeElement, 'display', 'flex');
        this.renderer.setStyle(this.logoutBtnRef.nativeElement, 'display', 'none')
      }

    })

    fromEvent(this.logoutBtnRef.nativeElement, 'click').subscribe(() => {
      this.isLoggedIn$.next(false)
    })
  }

  showState() {
    console.log(this.isLoggedIn$)
  }
}

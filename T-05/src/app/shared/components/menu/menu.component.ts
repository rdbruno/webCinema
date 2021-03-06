import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public userLogged = false;
  public directionText = '';
  public deviceXs = false;
  mobileQuery!: MediaQueryList;
  mediaSub!: Subscription;
  private mobileQueryListener: () => void;

  constructor(
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public mediaObserver: MediaObserver
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    if ((!localStorage.getItem('Login'))) {
      this.userLogged = false;
      this.directionText = 'Entrar';
    } else {
      this.userLogged = true;
      this.directionText = 'Sair';
    }
    
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });
  }

  public logInOut(): void {
    if (this.directionText === 'Entrar') {
      this.router.navigate(['acesso']);
    } else if (this.directionText === 'Sair') {
      localStorage.clear();
      this.router.navigate(['acesso']);
    }
  }

}

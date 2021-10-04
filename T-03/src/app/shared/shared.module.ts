import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [  
    MenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    //CookieModule.forRoot(),
    //UserIdleModule.forRoot({ idle: 300, timeout: 300, ping: 1680 }), // Idle => 5 minutos e Timeout => 5 minutos;
    RouterModule
    /*
    ToastrModule.forRoot({
      timeOut: 10000,
      preventDuplicates: true,
      closeButton: true,
      positionClass: 'toast-top-full-width',
      tapToDismiss: false
    }),
    */
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MenuComponent
  ],
  providers: [ ]

})
export class SharedModule {
}

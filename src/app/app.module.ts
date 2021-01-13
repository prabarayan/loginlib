import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyloginModule } from 'mylogin';
import { LoginComponent } from './login/login.component';
import { EmailloginComponent } from './emaillogin/emaillogin.component';
// import { MyloginModule } from 'mysimplelogin';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyloginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

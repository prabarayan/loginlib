import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailloginComponent } from './emaillogin/emaillogin.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'emaillogin', component: EmailloginComponent },
{ path: 'welcome', component: WelcomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

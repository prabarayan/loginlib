import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailloginComponent } from './emaillogin/emaillogin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'emaillogin', component: EmailloginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

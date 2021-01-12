import { NgModule } from '@angular/core';
import { MyloginComponent } from './mylogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [MyloginComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [MyloginComponent]
})
export class MyloginModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emaillogin',
  templateUrl: './emaillogin.component.html',
  styleUrls: ['./emaillogin.component.sass']
})
export class EmailloginComponent implements OnInit {
  email: string = "email"
  constructor() { }

  ngOnInit(): void {
  }

}

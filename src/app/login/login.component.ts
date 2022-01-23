import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private http: HttpClient;
  arrayList: any;
  constructor() {}

  ngOnInit() {
    this.arrayList = [
      {
        name: 'Nishant',
        age: 25
      },
      {
        name: 'Shailesh',
        age: 45
      },
      {
        name: 'Abhishek',
        age: 36
      },
      {
        name: 'Akshay',
        age: 65
      },
      {
        name: 'Ashish',
        age: 12
      },
      {
        name: 'Uday',
        age: 31
      },
      {
        name: 'Mayank',
        age: 45
      },
      {
        name: 'Raju',
        age: 74
      },
    ]
  
  }
}

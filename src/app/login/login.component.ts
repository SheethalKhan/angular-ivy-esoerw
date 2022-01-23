import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  arrayList = [];
  p: number = 1;
  msg: any;
  total: any;
  tempArray = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        this.arrayList = res;
        this.total = res.length;
        // this.arrayList.forEach((element) => {
        //   console.log('res', element.id);
        // });
        // console.log('res', res);
      });
  }
  pageChanged(e) {
    this.p = e;
  }
  search() {
    this.arrayList.forEach((element) => {
      if (element == this.msg) {
        this.tempArray.push(element);
      }
    });
    console.log(this.total);
    this.total = this.tempArray.length;
  }
}

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
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        this.arrayList = res;
        // this.arrayList.forEach((element) => {
        //   console.log('res', element.id);
        // });
        // console.log('res', res);
      });
  }
  pageChanged(e) {
    this.p = e;
  }
}

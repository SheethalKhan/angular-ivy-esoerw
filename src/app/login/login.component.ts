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
    // this.arrayList=[
    //   {
    //     "product": "Caprese bag",
    //     "description": "blue sling bag with a pink abstract design",
    //     "price": 1000
    //   },
    //   {
    //     "product": " Baggitbag",
    //     "description": "blue sling bag with a pink abstract design",
    //     "price": 1000
    //   },
    //   {
    //     "product": "Lavie bag",
    //     "description": "blue sling bag with a pink abstract design",
    //     "price": 1000
    //   },
    //   {
    //     "product": "Linos perroros bag",
    //     "description": "blue sling bag with a pink abstract design",
    //     "price": 1000
    //   },
    //   {
    //     "product": " sheethal bag",
    //     "description": "blue hjkjjkjk $%&**bbnmmhg sling bag with a pink abstract design",
    //     "price": 18800
    //   },
    //   {
    //     "product": "Rajan bag",
    //     "description": "bhfjgkjgkjuyuttttttttttttttttttttttttt lue sling bag with a pink abstract design",
    //     "price": 10
    //   },
    //   {
    //     "product": "Ragavendran bag",
    //     "description": "bluhjmjmjkjkje sling bag with a pink abstract design",
    //     "price": 10850
    //   },
    //   {
    //     "product": "adipoli bag",
    //     "description": "blue slkjkj fgfdhgfh yjy 566451651 hing bag with a pink abstract design",
    //     "price": 789
    //   },
    //   {
    //     "product": "sundari bag",
    //     "description": "bluehghg gdhgfh fhfhj sling bag with a pink abstract design",
    //     "price": 5500
    //   },
    //   {
    //     "product": "manavalan bag",
    //     "description": " bag with a pink abstract design",
    //     "price": 10800
    //   },
    //   {
    //     "product": "poli bag",
    //     "description": "blue sling pink abstract design",
    //     "price": 1400
    //   },
    //   {
    //     "product": "doluma aaluma bag",
    //     "description": "blue sling bag with a  design",
    //     "price": 184
    //   }
    // ]
  }
}

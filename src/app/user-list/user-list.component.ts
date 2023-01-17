import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //create an array of Objects
  userInfoList: UserInfo[] = [
    new UserInfo("Jane","Limp","jane_limp@gmail.com","JaneLimp"),
    new UserInfo("Simohn","Beg","simohn_beg@gmail.com","SimBeg"),
    new UserInfo("Nick","kafman","nick_kafman@gmail.com","Nicki"),
    new UserInfo("Mari","Doe","mari_doe@gmail.com","MariDoe")
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

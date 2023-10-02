import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  usersList: any[] = 
  [
    {
      "userId": 1,
      "firstName": "Alejandro",
      "lastName": "Larios",
      "email": "macdroopy@eldebugger.com",
    },
    {
      "userId": 2,
      "firstName": "Sonia",
      "lastName": "Zuniga",
      "email": "stzalan@gmail.com",
    }
  ];
}

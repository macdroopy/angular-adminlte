import { Injectable } from '@angular/core';
import { UserDto } from '../shared/dto/user-dto.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public user: UserDto = new UserDto();
  public userList: UserDto[] = 
  [
    {
      "userId": "1",
      "firstName": "Alejandro",
      "lastName": "Larios",
      "email": "macdroopy@eldebugger.com",
    },
    {
      "userId": "2",
      "firstName": "Sonia",
      "lastName": "Zuniga",
      "email": "stzalan@gmail.com",
    }
  ];

  constructor() { 
  }

  public getUserById(userId: string): UserDto {
    return this.user;
  }

    
  public getUserFullName(user: UserDto): string {
    return user.firstName + " " + user.lastName;
  }

  public getUsersList(): UserDto[] {
    return this.userList;
  }
}

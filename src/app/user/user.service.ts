import { Injectable } from '@angular/core';
import { UserDto } from '../shared/dto/user-dto.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  public user: UserDto = new UserDto();
  public userList: UserDto[] = [];
  public webApiUrl: string = 'api/user/userslist.json';

  constructor(private httpClient: HttpClient) { }

  public getUserById(userId: number): UserDto {
    if (isNaN(userId)) {
      
    }
    return this.user;
  }

  public getUserFullName(user: UserDto): string {
    return user.firstName + ' ' + user.lastName;
  }

  public getUsersList(): Observable<UserDto[]> {
    console.log('webApiUrl: ' + this.webApiUrl);
    return this.httpClient.get<UserDto[]>(this.webApiUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }
    console.log(`Error Message: ${errorMessage} at ${Date.now()}`);
    return throwError(() => errorMessage);
  }
}

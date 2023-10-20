import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { UserDto } from '../dto/user-dto.model';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  public fullName: string = "";
  public userDto: UserDto = new UserDto;
  public userDtoList: UserDto[] = [];
  public webApiUrl: string = 'api/user/userslist.json';

  constructor(private httpClient: HttpClient) { 

  }

  public getUserById(userId: number): Observable<UserDto> {
    return this.httpClient.get<UserDto>(this.webApiUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  
  public getUsersList(): Observable<UserDto[]> {
    return this.httpClient.get<UserDto[]>(this.webApiUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public getUserFullName(user: UserDto): string {
    this. fullName = user.firstName + ' ' + user.lastName;
    return this.fullName;
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

  OnPostUserForm(userDto: UserDto): Observable<UserDto> {
    return of(userDto);
  }
}

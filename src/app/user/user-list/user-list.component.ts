import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDto } from 'src/app/shared/dto/user-dto.model';
import { UserService } from 'src/app/shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService],
})

export class UserListComponent implements OnInit, OnDestroy {
  public userDto: UserDto = new UserDto();
  public usersList: UserDto[] = [];
  public errorMessage: string = '';
  public subscription!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.getUsersList().subscribe({
      next: (usersList) => {
        this.usersList = usersList;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    //console.log("app-user-list-ngOnDestroy");
  }

  ngOnChanges() {
    //console.log("app-user-list-ngOnChanges");
  }

  ngDoCheck() {
    //console.log("app-user-list-ngDoCheck");
  }

  ngAfterContentInit() {
    //console.log("app-user-list-ngAfterContentInit");
  }

  ngAfterContentChecked() {
    //console.log("app-user-list-ngAfterContentChecked");
  }

  ngAfterViewInit() {
    $('#tblUserList').DataTable({
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: true,
    });
    //console.log("app-user-list-ngAfterViewInit");
  }

  ngAfterViewChecked() {
    //console.log("app-user-list-ngAfterViewChecked");
  }

  OnClick_Edit(userId: string) {
    //console.log("OnClick_Edit: " + userId);
  }

  OnClick_Delete(userId: string) {
    //console.log("OnClick_Edit: " + userId);
  }
}

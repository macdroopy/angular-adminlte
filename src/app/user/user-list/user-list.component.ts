import { Component } from '@angular/core';
import { UserDto } from 'src/app/shared/dto/user-dto.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent {
    public userDto: UserDto = new UserDto();
    public usersList: UserDto[] = [];

    constructor(private _userService: UserService){
      
    }

    public  ngOnInit() {
      this.usersList = this._userService.getUsersList();
      console.log("app-user-list-ngOnInit");
    }

    public ngOnChanges() {
      console.log("app-user-list-ngOnChanges");
    }

    public ngDoCheck() {
      console.log("app-user-list-ngDoCheck");
    }
    
    public ngAfterContentInit() {
      console.log("app-user-list-ngAfterContentInit");
    }

    public ngAfterContentChecked() {
      console.log("app-user-list-ngAfterContentChecked");
    }

    public ngAfterViewInit() {
      $("#tblUserList").DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true
      });
      console.log("app-user-list-ngAfterViewInit");
    }

    public ngAfterViewChecked() {
      console.log("app-user-list-ngAfterViewChecked");
    }

    public ngOnDestroy() {
      console.log("app-user-list-ngOnDestroy");
    }

    OnClick_Edit(userId: string){
      console.log("OnClick_Edit: " + userId);
    }

    OnClick_Delete(userId: string){
      console.log("OnClick_Edit: " + userId);
    }
}
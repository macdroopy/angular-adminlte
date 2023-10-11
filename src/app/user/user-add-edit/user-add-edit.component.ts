import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDto } from 'src/app/shared/dto/user-dto.model';
import { UserService } from 'src/app/shared/services/user.service';
import { IUserDto } from 'src/app/shared/interfaces/iuser-dto';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {
  pageTitle: string = "User";
  user: UserDto = new UserDto;
  userDto: IUserDto = {
    userId: 0,
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private activatedRoute: ActivatedRoute, 
    private userService: UserService, 
    private router: Router) {
  }

  ngOnInit() {
    const userId = Number(this.activatedRoute.snapshot.paramMap.get("userId"));
    console.log("userId: " + userId);

    if (userId > 0){
      this.user = this.userService.getUserById(userId);
      console.log("user: " + this.user);
    }
    else {
    }
  }

  onReturnToUsersList(): void {
    this.router.navigate(['user-list']);
  }

  OnSubmit(form: NgForm){
    console.log("OnSubmit: " + form.valid);
    this.userService.OnPostUserForm(this.userDto).subscribe(
      result => console.log("success: " , result),
      error => console.log("error: ", error)
    );
  }

  
}
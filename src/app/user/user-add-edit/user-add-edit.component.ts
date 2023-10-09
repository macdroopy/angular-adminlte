import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDto } from 'src/app/shared/dto/user-dto.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {
  pageTitle: string = "User";
  user: UserDto = new UserDto;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    const userId = Number(this.activatedRoute.snapshot.paramMap.get("userId"));
    this.pageTitle = `UserId: ${userId}`;
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
}
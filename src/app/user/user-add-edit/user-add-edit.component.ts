import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { NgForm } from '@angular/forms';
import { UserDto } from 'src/app/shared/dto/user-dto.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})

export class UserAddEditComponent implements OnInit {
  public pageTitle: string = "User";
  public userDto: UserDto = new UserDto;
  public subscription!: Subscription;
  public errorMessage: string = '';

  constructor(private activatedRoute: ActivatedRoute, 
    private userService: UserService, 
    private router: Router) {
  }

  ngOnInit() {
    const userId = Number(this.activatedRoute.snapshot.paramMap.get("userId"));

    if (userId > 0) {
      this.subscription = this.userService.getUserById(userId).subscribe({
        next: (userDto) => {
          this.userDto = userDto;
        },
        error: (err) => (this.errorMessage = err),
      });
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
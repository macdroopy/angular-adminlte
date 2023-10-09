import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserAddEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }

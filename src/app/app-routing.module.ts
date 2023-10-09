import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserAddEditComponent } from './user/user-add-edit/user-add-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-add-edit/:userId', component: UserAddEditComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details/:userId', component: UserDetailsComponent }
];
export default appRoutes;
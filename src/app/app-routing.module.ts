import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserAddEditComponent } from './user/user-add-edit/user-add-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-add-edit', component: UserAddEditComponent },
  { path: 'user-list', component: UserListComponent }
];
export default appRoutes;
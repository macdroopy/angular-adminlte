import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import appRoutes from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddEditComponent } from './users/user-add-edit/user-add-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MainHeaderComponent } from './main-header/main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './main-footer/main-footer/main-footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar/control-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAddEditComponent,
    UserListComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

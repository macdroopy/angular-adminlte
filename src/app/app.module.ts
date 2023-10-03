import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import appRoutes from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserAddEditComponent } from './user/user-add-edit/user-add-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MainHeaderComponent } from './main-header/main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './main-footer/main-footer/main-footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar/control-sidebar.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';


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
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import appRoutes from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
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
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

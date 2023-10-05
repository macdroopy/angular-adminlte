import { Component, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent {
  
  public ngOnChanges() {
    //console.log("app-main-sidebar-ngOnChanges");
  }

  public  ngOnInit() {
    //console.log("app-main-sidebar-ngOnInit");
    this.OnSelected_Menu('LiUsers', 'Null');
  }

  public ngDoCheck() {
    //console.log("app-main-sidebar-ngDoCheck");
  }
  
  public ngAfterContentInit() {
    //console.log("app-main-sidebar-ngAfterContentInit");
  }

  public ngAfterContentChecked() {
    //console.log("app-main-sidebar-ngAfterContentChecked");
  }

  public ngAfterViewInit() {
    //console.log("app-main-sidebar-ngAfterViewInit");
  }

  public ngAfterViewChecked() {
    //console.log("app-main-sidebar-ngAfterViewChecked");
  }

  public ngOnDestroy() {
    //console.log("app-main-sidebar-ngOnDestroy");
  }

  OnSelected_Menu (LiParent: string, LiChild:string) {
    $("li").removeClass("active menu-open");
    
    if (LiParent != "Null") {
      $("#" + LiParent + "").addClass("active menu-open");
    }
    
    if (LiChild != "Null") {
      $("#" + LiChild + "").addClass("active");
    }
  }
}

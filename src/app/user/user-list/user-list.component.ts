import { Component } from '@angular/core';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  usersList: any[] = 
  [
    {
      "userId": 1,
      "firstName": "Alejandro",
      "lastName": "Larios",
      "email": "macdroopy@eldebugger.com",
    },
    {
      "userId": 2,
      "firstName": "Sonia",
      "lastName": "Zuniga",
      "email": "stzalan@gmail.com",
    }
  ];

  public ngOnChanges() {
    console.log("ngOnChanges");
  }

  public  ngOnInit() {
    console.log("ngOnInit");
  }

  public ngDoCheck() {
    console.log("ngDoCheck");
  }
  
  public ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  public ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  public ngAfterViewInit() {
    $("#tblUserList").DataTable({
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true
    });
    console.log("ngAfterViewInit");
  }

  public ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  public ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  OnClick_Edit(userId: string){
    console.log("OnClicked_Edit: " + userId);
  }

  OnClick_Delete(userId: string){
    console.log("OnClicked_Delete: " + userId);
  }
}

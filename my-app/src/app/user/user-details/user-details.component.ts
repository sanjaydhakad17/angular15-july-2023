import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployeesDetails } from 'src/app/model/employees-details';
import { SharedDataService } from 'src/app/services/shared-data.service';
  
console.log("user component called");

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  userDetails: IEmployeesDetails[] = [];
  
  constructor(private empService : SharedDataService, private router: Router, private cd : ChangeDetectorRef) {}
  ngOnInit(): void {
    //this.userDetails = this.emp.employeeDetails();
    this.empService.empSubject$.subscribe( (res : any) => {
      if(res.changeFlag) {
        this.userDetails = res;
        //this.cd.markForCheck();
      }
    })
    this.empService.getEmpployeeDetails().subscribe( (res:any) => {
      this.userDetails = res;
      //this.cd.markForCheck();

    })
  }

  onUpdate(id : number, user:any) {
    //commenting for update function
    //this.router.navigate(['user-details/user-form/'+id], {queryParams : user});
    this.router.navigate(['user-details/user-form/'+id], {queryParams : user});
  }

  onAdd(id : number) {
    this.router.navigate(['user-details/user-form/'+id]);
  }

  onDelete(id : number) {
    this.empService.deleteEmployeeDetails(id).subscribe(
      data => {
        this.empService.getEmpployeeDetails().subscribe( (res: any) => {
          this.userDetails = res;
        });
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  
}

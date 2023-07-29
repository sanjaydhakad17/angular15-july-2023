import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';


@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss']
})
export class UserDetailsFormComponent implements OnInit {

  userId: any;
  userLoginForm : any;
  //@Output() receivedUserDetails = new EventEmitter<any>();
  constructor(private route : ActivatedRoute, private empService: SharedDataService) {
    
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    //console.log(this.route.snapshot.queryParamMap.get('firstName'));
    this.route.queryParams.subscribe(
      params => {
        this.userLoginForm = new FormGroup({
          firstName : new FormControl(params['firstName'], [Validators.required]),
          lastName : new FormControl(params['lastName'], [Validators.required]),
          email : new FormControl(params['email'], [Validators.required,Validators.pattern('[a-zA-Z@.]+$')])
        })
      });
      
      /*  Below code for to get value only one time
      // this.userLoginForm = new FormGroup({
      //   firstName : new FormControl(this.route.snapshot.queryParamMap.get('firstName'), [Validators.required]),
      //   lastName : new FormControl(this.route.snapshot.queryParamMap.get('lastName'), [Validators.required]),
      //   email : new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z@.]+$')])
    
      // })
      */
  }

  addEmployeeDetails() {
    console.log(this.userLoginForm.value); 
    let inputJson = {
      "firstName": this.userLoginForm.value.firstName,
      "lastName": this.userLoginForm.value.lastName,
      "email": this.userLoginForm.value.email
    }
    if(this.route.snapshot.queryParamMap.get('id')) {
      this.empService.updateEmployeeDetails(this.route.snapshot.queryParamMap.get('id'), inputJson).subscribe(
        data => {
          this.empService.getEmpployeeDetails().subscribe(res => {
            //this.receivedUserDetails.emit(res)
            this.empService.changeData(res, true);
            this.userLoginForm.reset();
          });
        },
        error => {
          console.log('Error', error);
        }
      );
    } else {
      this.empService.addEmpployeeDetails(inputJson).subscribe(
        data => {
          this.empService.getEmpployeeDetails().subscribe(res => {
            //this.receivedUserDetails.emit(res)
            this.empService.changeData(res, true);
          });
        },
        error => {
          console.log('Error', error);
        }
      );

      this.userLoginForm.reset();
    }
        
  }

  // Get accessour to use angular classes and events for ex: ng-touched, ng-invalid
  get firstName() {
    return this.userLoginForm.get('firstName');
  }

  get lastName() {
    return this.userLoginForm.get('lastName');
  }

  get email() {
    return this.userLoginForm.get('email');
  }


}

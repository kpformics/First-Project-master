import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInterface } from 'src/interfaces/employee.interface';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AllEmployeesComponent } from '../all-employees/all-employees.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  avtar = faUserTie;

  employeeid: number = 0;
  employee: EmployeeInterface | undefined;

  editform = this.fb.group({
    name: ['xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'],
    birthDate: [''],
    gender: [''],
    city: [''],
    email: [''],
    phone: [''],
    jobTitle: [''],
    employmenttype: [''],
    joiningDate: [''],
    contractExpiry: [''],
    documents: [''],
    salary: [''],
  });
  ngOnInit(): void {
    this.employeeid = this.route.snapshot.params['id'];
    this.employeeService.employee(this.employeeid).subscribe((data) => {
      this.employee = data;
      this.editform.patchValue({ ...data });
    });
  }

  // edit form will send all form values
  onsubmit(employeeid: number) {
    this.employeeService
      .editemployee(employeeid, this.editform.getRawValue())
      .subscribe((data: any) => {});
  }

  //delete employee
  deleteemployee(employeeId: number) {
    this.employeeService.deleteemployee(employeeId).subscribe((data) => {
      alert(`deleted employee id ${employeeId}`);
    });
  }
}

// edit form will send only those values which are edited
// onsubmit(employeeid: number) {
//   let dirtyValuesList = this.getDirtyValues(this.editform);
//   console.log('dirty values:', dirtyValuesList);
//   let data = dirtyValuesList;
//   this.employeeService
//     .editemployee(employeeid, data)
//     .subscribe((data: any) => {});
// }

// getDirtyValues(editform: any) {
//   let dirtyValues: any = {};

//   Object.keys(editform.controls).forEach((key) => {
//     let currentControl: any = editform.controls[key];

//     if (currentControl.dirty) {
//       if (currentControl.controls)
//         dirtyValues[key] = this.getDirtyValues(currentControl);
//       else dirtyValues[key] = currentControl.value;
//     }
//   });

//   return dirtyValues;
// }

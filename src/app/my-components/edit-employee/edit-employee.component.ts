import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInterface } from 'src/interfaces/employee.interface';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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

  editform!: FormGroup;

  ngOnInit(): void {
    this.editform = this.fb.group({
      name: new FormControl(''),
      birthDate: [''],
      gender: [''],
      city: new FormControl(''),
      email: [''],
      phone: [''],
      jobTitle: [''],
      employmenttype: [''],
      joiningDate: [''],
      contractExpiry: [''],
      documents: [''],
      salary: [''],
    });

    this.employeeid = this.route.snapshot.params['id'];
    this.employeeService.employee(this.employeeid).subscribe((data) => {
      this.employee = data;
    });
  }

  // updateemployee(employeeid: number, data: any) {
  //   this.employeeService
  //     .editemployee(employeeid, data)
  //     .subscribe((data: any) => {});
  // }

  onsubmit(employeeid: number) {
    let data = this.editform.getRawValue();
    this.employeeService
      .editemployee(employeeid, data)
      .subscribe((data: any) => {});
  }

  // changevalue() {
  //   this.editform;
  // }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import {
  faEdit,
  faEye,
  faGrip,
  faList,
  faTrash,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInterface } from 'src/interfaces/employee.interface';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss'],
})
export class AllEmployeesComponent implements OnInit {
  //icons
  avtar = faUserTie;
  view = faEye;
  edit = faEdit;
  del = faTrash;
  list = faList;
  grid = faGrip;

  employees: EmployeeInterface[] | [] = [];
  typeselected: string;

  constructor(
    private employeesService: EmployeeService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.typeselected = 'square-jelly-box';
  }

  ngOnInit(): void {
    this.employeesService.employess().subscribe((data) => {
      this.employees = data;
    });
  }

  viewEmployee(employeeid: number) {
    this.router.navigate([`viewemployee-component/${employeeid}`]);
  }

  editemployee(employeeid: number) {
    this.router.navigate([`editemployee-component/${employeeid}`]);
  }

  deleteemployee(employeeId: number) {
    // spinner starts here
    this.spinner.show();
    this.employeesService.deleteemployee(employeeId).subscribe((data) => {
      this.employeesService.employess().subscribe((data) => {
        this.employees = data;
      });
    });
    // spinner stops here
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  // showSpinner(): void {
  //   this.spinner.show();

  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 2000);
  // }
}

import { Component, OnInit } from '@angular/core';
import {  faEdit, faEye, faGrip, faList, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';

import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {

  //icons
  avtar = faUserTie;
  view = faEye;
  edit = faEdit;
  del = faTrash;
  list = faList;
  grid = faGrip;

  public employees:any[] = [];
  
  constructor(private  _employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeservice.getemployees();
  }
 

}

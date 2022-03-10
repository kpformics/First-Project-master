import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInterface } from 'src/interfaces/employee.interface';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  avtar = faUserTie;

  employeeid: number = 0;
  employee: EmployeeInterface | undefined;

  constructor(
    private employeedata: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeid = this.route.snapshot.params['id'];
    this.employeedata.employee(this.employeeid).subscribe((data) => {
      this.employee = data;
    });
  }

  // editEmployee(){this.employeedata.editemployee(this.employeeid).subscribe((data) => {
  //   this.employee = data;
  // });}
}

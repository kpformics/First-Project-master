import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInterface } from 'src/interfaces/employee.interface';
import {} from '@angular/forms';

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
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeid = this.route.snapshot.params['id'];
    this.employeeService.employee(this.employeeid).subscribe((data) => {
      this.employee = data;
    });
  }

  updateemployee(employeeid: number, data: any) {
    this.employeeService
      .editemployee(employeeid, data)
      .subscribe((data: any) => {});
  }
}

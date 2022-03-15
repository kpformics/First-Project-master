import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInterface } from 'src/interfaces/employee.interface';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {
  avtar = faUserTie;

  employeeid: number = 0;
  employee: EmployeeInterface | undefined;
  constructor(
    private employeedata: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeid = this.route.snapshot.params['id'];
    this.employeedata.employee(this.employeeid).subscribe((data) => {
      this.employee = data;
    });
  }

  editemployee(employeeid: number) {
    this.router.navigate([`editemployee-component/${employeeid}`]);
  }
}

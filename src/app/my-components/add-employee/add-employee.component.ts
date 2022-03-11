import { Component, KeyValueChanges, OnInit } from '@angular/core';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInterface } from 'src/interfaces/employee.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  avtar = faUserTie; //icon

  data: EmployeeInterface = {
    id: 0,
    name: '',
    salary: '',
    phone: 0,
    email: '',
    birthdate: '',
    gender: '',
    city: '',
    jobtitle: '',
    Employmenttype: '',
    joiningdate: '',
    contractexpiry: '',
    document: '',
  };

  constructor(
    private router: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {}

  addEmployee(employee: EmployeeInterface) {
    this.employeeService.addemployee(this.data).subscribe((data: any) => {
      // this.router.navigate(['/allemployees-component']);
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInterface } from 'src/interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {}

  // function for employee list
  employess() {
    return this.http.get<EmployeeInterface[]>(this.url);
  }

  //function for employee detail
  employee(employeeViewId: number) {
    return this.http.get<EmployeeInterface>(`${this.url}/${employeeViewId}`);
  }

  //edit
  editemployee(employeeEditId: number, data: any) {
    return this.http.put(`${this.url}/${employeeEditId}`, {
      ...data,
    });
  }

  //add
  addemployee(addemployee: EmployeeInterface) {
    return this.http.post(`${this.url}`, addemployee);
  }

  //delete
  deleteemployee(deleteemployeeId: number) {
    return this.http.delete(`${this.url}/${deleteemployeeId}`);
  }
}

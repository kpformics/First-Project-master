import { Component, OnInit } from '@angular/core';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  avtar = faUserTie;

  constructor() { }

  ngOnInit(): void {
  }

}

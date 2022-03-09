import { Component, OnInit } from '@angular/core';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  avtar = faUserTie;

  public employees = [];

  constructor() { }

  ngOnInit(): void {
  }

}

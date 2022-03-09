import { Component, OnInit } from '@angular/core';
import { faUserGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  all = faUserGroup;
  add = faUserPlus;

  constructor() { }

  ngOnInit(): void {
  }

}




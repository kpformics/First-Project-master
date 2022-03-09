import { Component, OnInit } from '@angular/core';
import {  faEye, faHome, faUserGroup, faUserPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

   home = faHome;
   all = faUserGroup;
   add = faUserPlus;
   view = faEye;
   edit = faUserPen;
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}



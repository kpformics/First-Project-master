import { Component, KeyValueChanges, OnInit } from '@angular/core';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  avtar = faUserTie;//icon

data:any = {
  name:"",
  birthdate:"",
  gender:"",
  city:"",
  email:"",
  phone:"",
  jobtitle:"",
  emptype:"",
  joiningdate:"",
  contractexpiry:"",
  doc:"",
  salary:""
}


  constructor() { }

  ngOnInit(): void {
  }


  dosubmitform() {
    alert("submit");
     console.log("DATA", this.data); 
  }

}

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getemployees(): any [] { 
    return [
      { "id" : 1,
      'name': "Marc Parrish",
      'birthdate':"1 jan,1991",
      'gender':"Male",
      'city':"Rajkot",
      'email':"123@email.com",
      'phone':"768799789",
      'jobtitle':"Developer",
      'emptype':"Full-time",
      'joiningdate':"11 jan",
      'contractexpiry':"11 jan",
      'doc':"Aadhar Card",
      'salary':"305796" },

      { "id" : 2,
      'name': "Jarrett Best",
      'birthdate':"2 jan,1993",
      'gender':"Female",
      'city':"Ahmeh",
      'email':"234@email.com",
      'phone':"67756",
      'jobtitle':"QA",
      'emptype':"Full-time",
      'joiningdate':"11 jan",
      'contractexpiry':"11 jan",
      'doc':"Aadhar",
      'salary':"8798596" },

      { "id" : 3,
      'name': "Jarrett Best",
      'birthdate':"2 jan,1993",
      'gender':"Female",
      'city':"Ahmeh",
      'email':"234@email.com",
      'phone':"67756",
      'jobtitle':"QA",
      'emptype':"Full-time",
      'joiningdate':"11 jan",
      'contractexpiry':"11 jan",
      'doc':"Aadhar",
      'salary':"8798596" }
    
    
    ];
  }
}

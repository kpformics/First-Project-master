import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './my-components/menu/menu.component';
import { DashboardComponent } from './my-components/dashboard/dashboard.component';
import { AllEmployeesComponent } from './my-components/all-employees/all-employees.component';
import { DefaultScreenComponent } from './my-components/default-screen/default-screen.component';
import { AddEmployeeComponent } from './my-components/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './my-components/view-employee/view-employee.component';
import { EditEmployeeComponent } from './my-components/edit-employee/edit-employee.component';

import { EmployeeService} from './services/employee.service';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    AllEmployeesComponent,
    DefaultScreenComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule 
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

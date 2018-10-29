import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../../share/emp.ser'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html'
})
export class CreateempComponent implements OnInit {
  employeeForm;
  constructor(private _employeeService: EmployeeService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {


  }
  private getEmployee(id: number) {

  }
  saveEmployee(employee): void {

    console.log(employee.value);

    let newEmployee = {
      "fields": {
        "title": {
          "stringValue": employee.value.title
        },
        "description": {
          "stringValue": employee.value.description
        }
      }
    };
    this.employeeForm.reset();
    this._employeeService.save(newEmployee).subscribe((empList) => {
      console.log(empList);
      this._router.navigate(['list']);
      //this.employees=empList;
    });;




  }


}

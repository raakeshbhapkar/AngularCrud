import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../share/emp.ser'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  employees = [];

  constructor(private _EmployeeService: EmployeeService, private _router: Router, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._EmployeeService.getEmployeesData().subscribe((empList) => {
      console.log(empList);
      this.employees = empList;
    })


  }


  editEmployee(employeeId: any) {
    let lastindex = employeeId.lastIndexOf("/");
    let setId = employeeId.slice(lastindex + 1, employeeId.length);
    console.log("setId", setId);
    this._router.navigate(['/employees', setId])

  }
  deleteEmployee(employeeId: string) {
    let lastindex = employeeId.lastIndexOf("/");
    let setId = employeeId.slice(lastindex + 1, employeeId.length);
    console.log(setId);
    this._EmployeeService.deleteEmployee(setId).subscribe((empList) => {
      console.log(empList);
      this.employees = empList;
    });
  }



}


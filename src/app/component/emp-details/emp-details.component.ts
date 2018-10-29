import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../share/emp.ser';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  private selectempId: any;
  private employe: any;
  private _id;
  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.selectempId = this._route.snapshot.paramMap.get("id");
    this._employeeService.getEmployee(this.selectempId).subscribe((empList) => {

      this.employe = empList;
    })
  }


}

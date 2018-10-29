import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";


@Injectable()
export class EmployeeService {
    constructor(private _http: Http) { }
    getEmployeesData(): Observable<any> {
        return this._http.get('https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks')
            .pipe(map((response: Response) => response.json()));
    }
    getEmployee(id) {
         return this._http.get(`https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks/${id}`)
            .pipe(map((response: Response) => response.json()));
    }
    save(employee) {
        return this._http.post('https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks/', employee)
            .pipe(map((response: Response) => response.json()));


    }
    deleteEmployee(id: string) {
        return this._http.delete(`https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks/${id}`)
            .pipe(map((response: Response) => response.json()));

    }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { EmplistComponent } from './component/emplist/emplist.component';
import { CreateempComponent } from './component/createemp/createemp.component';

import { EmployeeService } from './share/emp.ser';

import { EmpDetailsComponent } from './component/emp-details/emp-details.component';

import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: EmplistComponent

  },

  { path: 'employees/:id', component: EmpDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: "full" },
  {
    path: 'edit/:id',
    component: CreateempComponent
  },
  { path: 'pagenotfound', component: PageNotFoundComponent },
]
@NgModule({
  declarations: [
    AppComponent,

    EmplistComponent,
    CreateempComponent,
    EmpDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,

    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const emprouting: Routes = [
  {path: 'empdash', component: DashboardComponent},
  {path: 'demo', component: DemoComponent}
];

@NgModule({
  declarations: [DashboardComponent, DemoComponent],
  imports: [
    CommonModule, RouterModule.forChild(emprouting), FormsModule, ReactiveFormsModule
  ]
})
export class EmployeeModule { }

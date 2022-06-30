import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiformComponent } from "./multiform/multiform.component";
import { Form1Component } from "./multiform/form1/form1.component";
import { Form2Component } from "./multiform/form2/form2.component";
import { Form3Component } from "./multiform/form3/form3.component";
import { Form4Component } from "./multiform/form4/form4.component";
import { Form5Component } from "./multiform/form5/form5.component";
import { Form6Component } from "./multiform/form6/form6.component";
import { Form7Component } from "./multiform/form7/form7.component";
import { Form8Component } from "./multiform/form8/form8.component";

const adminrouting: Routes = [
  { path: "adminbash", component: DashboardComponent },
  { path: "city", component: AddStudentComponent },
  { path: "multiform", component: MultiformComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    AddStudentComponent,
    MultiformComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component,
    Form7Component,
    Form8Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminrouting),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MastermoduleModule {}

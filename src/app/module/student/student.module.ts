import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { StudentdataComponent } from "./studentdata/studentdata.component";
import { StudashboardComponent } from "./studashboard/studashboard.component";

const sturouting: Routes = [
  { path: "studash", component: StudentdataComponent },
  { path: "studemo", component: StudashboardComponent },
];

@NgModule({
  declarations: [StudentdataComponent, StudashboardComponent],
  imports: [CommonModule, RouterModule.forChild(sturouting)],
})
export class StudentModule {}

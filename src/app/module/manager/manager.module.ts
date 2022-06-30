import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { LoanDataComponent } from './loan-data/loan-data.component';

const managerrouting: Routes = [
  { path: 'homemanager', component: HomeManagerComponent },
  { path: 'loandata', component: LoanDataComponent },
];

@NgModule({
  declarations: [HomeManagerComponent, LoanDataComponent],
  imports: [CommonModule, RouterModule.forChild(managerrouting)],
})
export class ManagerModule {}

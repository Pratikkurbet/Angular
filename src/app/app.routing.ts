import { MastermoduleModule } from './module/mastermodule/mastermodule.module';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { EmployeeModule } from './module/employee/employee.module';

import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { IndexPageComponent } from './index-page/index-page.component';
import { RegisterComponent } from './register/register.component';
import { StudentModule } from './module/student/student.module';
import { ManagerModule } from './module/manager/manager.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoanDataComponent } from './module/manager/loan-data/loan-data.component';
import { LoanModComponent } from './loan-mod/loan-mod.component';
import { FaqModComponent } from './faq-mod/faq-mod.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const AppRoutes: Routes = [
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
  {
    path: '',
    component: IndexPageComponent,
    children: [
      {
        path: 'about_us',
        component: AboutUsComponent,
      },
      {
        path: 'faq',
        component: FaqModComponent,
      },
      {
        path: 'contact_us',
        component: ContactUsComponent,
      },
      {
        path: 'loan_mod',
        component: LoanModComponent,
      },
    ]


  },


  {
    path: 'login_all',
    component: LoginComponent,
  },
  {
    path: 'register_student',
    component: RegisterComponent,
  },

  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      { path: 'admin', loadChildren: () => MastermoduleModule },
      { path: 'student', loadChildren: () => StudentModule },
      { path: 'manager', loadChildren: () => ManagerModule },
      { path: 'emp', loadChildren: () => EmployeeModule },
      { path: 'relation', loadChildren: () => RelationexecutiveModule },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

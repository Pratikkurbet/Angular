import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { DocumentComponent } from './document/document.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routing: Routes = [
  {path: 'oeenquiry', component:EnquiryComponent },
  {path:'oecustomer',component:CustomerregisterComponent},
  {path:'oedocument',component:DocumentComponent}
  
];
@NgModule({
  declarations: [CustomerregisterComponent, DocumentComponent, EnquiryComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),
    ReactiveFormsModule,FormsModule
  ]
})
export class RelationexecutiveModule { }

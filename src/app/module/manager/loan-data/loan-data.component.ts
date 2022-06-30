import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmissionDetails } from 'app/FORMS_Model/admission-details';
import { ParentBankDetails } from 'app/FORMS_Model/parent-bank-details';
import { ParentDetails } from 'app/FORMS_Model/parent-details';
import { ParentDocument } from 'app/FORMS_Model/parent-document';
import { Student } from 'app/FORMS_Model/student';
import { StudentBankDetails } from 'app/FORMS_Model/student-bank-details';
import { StudentDetails } from 'app/FORMS_Model/student-details';
import { StudentDocuments } from 'app/FORMS_Model/student-documents';
import { CommonService } from 'app/sharedservice/common.service';

@Component({
  selector: 'app-loan-data',
  templateUrl: './loan-data.component.html',
  styleUrls: ['./loan-data.component.css']
})
export class LoanDataComponent implements OnInit {
  studentinfo: Student[];
  stuDetails: StudentDetails[];
  stuDocs: StudentDocuments[];
  stuBankDetails: StudentBankDetails[];
  parentInfo: ParentDetails[];
  parentDocs: ParentDocument[];
  parentBankDetails: ParentBankDetails[];
  admissionDetails: AdmissionDetails[];

  show = false;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show7 = false;

  constructor(public common: CommonService, public route: Router) { }
  ngOnInit(): void {
    this.common.getData().subscribe((data) => (this.studentinfo = data));
  }
  deleteData(sid: number) {
    this.common.deleteData(sid).subscribe();
    this.show = false;
    window.location.reload();
  }

  nextDoc() {
    this.show = true;
  }
  nextDoc1() {
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.common.getBasicStudentDetails().subscribe(data => {this.stuDetails = data});
  }
  nextDoc2() {
    this.show2 = true;
    this.common.getstuData().subscribe(data => {this.stuDocs = data});
    this.show1 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
  }
  nextDoc3() {
    this.show3 = true;
    this.common.getStuBankDetails().subscribe(data => {this.stuBankDetails = data});
    this.show1 = false;
    this.show2 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
  }
  nextDoc4() {
    this.show4 = true;
    this.common.getParentDetails().subscribe(data => {this.parentInfo = data})
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
  }
  nextDoc5() {
    this.show5 = true;
    this.common.getParentDocuments().subscribe(data => {this.parentDocs = data})
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show6 = false;
    this.show7 = false;
  }
  nextDoc6() {
    this.show6 = true;
    this.common.getParentBankDetails().subscribe(data => {this.parentBankDetails = data})
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show7 = false;
  }
  nextDoc7() {
    this.show7 = true;
    this.common.getAdmissionDetails().subscribe(data => {this.admissionDetails = data})
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
  }
  msgPop() {

  }

}

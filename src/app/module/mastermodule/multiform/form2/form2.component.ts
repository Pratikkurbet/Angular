import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'app/sharedservice/common.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component implements OnInit {
  stuDocForm: FormGroup;

  AdmissionIdProf: any;
  Marksheet: any;
  FeesStructure: any;
  PanCard: any;
  AadharCard: any;
  Photo: any;
  Signiture: any;

  constructor(private http: CommonService, public formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.stuDocForm = this.formBuilder.group({
      studentId: [],
    });
  }

  onSelectedFileAdmissionIdProof(event: any) {
    this.AdmissionIdProf = event.target.files[0];
  }
  onSelectedFileMarksheet(event: any) {
    this.Marksheet = event.target.files[0];
  }
  onSelectedFileFeesStructure(event: any) {
    this.FeesStructure = event.target.files[0];
  }
  onSelectedFilePanCard(event: any) {
    this.PanCard = event.target.files[0];
  }
  onSelectedFileAadharCard(event: any) {
    this.AadharCard = event.target.files[0];
  }
  onSelectedFilePhoto(event: any) {
    this.Photo = event.target.files[0];
  }
  onSelectedFileSignature(event: any) {
    this.Signiture = event.target.files[0];
  }

  saveStuDocuments() {
    alert('Student Documents has uploaded');
    const stuId = JSON.stringify(this.stuDocForm.value);
    console.log(stuId);

    // Create Object Formdata
    const StudentUploadDocuments = new FormData();
    // Store File into formdata
    StudentUploadDocuments.append('admissionIdProof', this.AdmissionIdProf);
    StudentUploadDocuments.append('marksheet', this.Marksheet);
    StudentUploadDocuments.append('feeStructure', this.FeesStructure);
    StudentUploadDocuments.append('panCard', this.PanCard);
    StudentUploadDocuments.append('aadharCard', this.AadharCard);
    StudentUploadDocuments.append('photo', this.Photo);
    StudentUploadDocuments.append('signiture', this.Signiture);
    StudentUploadDocuments.append('doc', stuId);
    this.http.postStuDocument(StudentUploadDocuments).subscribe();
  }

  clear() {
    this.stuDocForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmissionDetails } from 'app/FORMS_Model/admission-details';
import { CommonService } from 'app/sharedservice/common.service';

@Component({
  selector: 'app-form7',
  templateUrl: './form7.component.html',
  styleUrls: ['./form7.component.css']
})
export class Form7Component implements OnInit {

  constructor(public admissionDetails: FormBuilder, public http: CommonService) { }
  // tslint:disable-next-line: member-ordering
  admissionDetailsForm: AdmissionDetails = {
    admissionDetailsId: 0,
    univerSityName: '',
    collegeName: '',
    collegeAddress: ''
  }
  admissionDetailsRegistration: FormGroup;
  ngOnInit(): void {
    this.admissionDetailsRegistration = this.admissionDetails.group({
      univerSityName: ['', [Validators.required]],
      collegeName: ['', [Validators.required]],
      collegeAddress: ['', [Validators.required]]
    });
  }
  registerAdmissionDetails() {
    this.admissionDetailsForm.univerSityName = this.admissionDetailsRegistration.get('univerSityName').value;
    this.admissionDetailsForm.collegeName = this.admissionDetailsRegistration.get('collegeName').value;
    this.admissionDetailsForm.collegeAddress = this.admissionDetailsRegistration.get('collegeAddress').value;
    this.http.addAdmissionDetails(this.admissionDetailsForm).subscribe();
    window.location.reload();
  }

  clear() {
    this.admissionDetailsRegistration.reset();
  }

}

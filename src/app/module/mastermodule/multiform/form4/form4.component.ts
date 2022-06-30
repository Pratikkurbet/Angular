import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParentDetails } from 'app/FORMS_Model/parent-details';
import { CommonService } from 'app/sharedservice/common.service';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

  constructor(public parentDetails: FormBuilder, public http: CommonService) { }
  parentDetailsForm: ParentDetails = {
    parentDetailsId: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    sex: '',
    occupation: '',
    income: '',
    panNo: '',
    mobNo: '',
    emailId: '',
    address: ''
  }
  parentDetailsRegistration: FormGroup
  ngOnInit(): void {
    this.parentDetailsRegistration = this.parentDetails.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      sex: [''],
      occupation: [''],
      income: [''],
      panNo: [''],
      mobNo: [''],
      emailId: [''],
      address: ['']
    });
  }
  registerParentDetails() {
    this.parentDetailsForm.firstName = this.parentDetailsRegistration.get('firstName').value;
    this.parentDetailsForm.lastName = this.parentDetailsRegistration.get('lastName').value;
    this.parentDetailsForm.dateOfBirth = this.parentDetailsRegistration.get('dateOfBirth').value;
    this.parentDetailsForm.sex = this.parentDetailsRegistration.get('sex').value;
    this.parentDetailsForm.occupation = this.parentDetailsRegistration.get('occupation').value;
    this.parentDetailsForm.income = this.parentDetailsRegistration.get('income').value;
    this.parentDetailsForm.panNo = this.parentDetailsRegistration.get('panNo').value;
    this.parentDetailsForm.mobNo = this.parentDetailsRegistration.get('mobNo').value;
    this.parentDetailsForm.emailId = this.parentDetailsRegistration.get('emailId').value;
    this.parentDetailsForm.address = this.parentDetailsRegistration.get('address').value;
    this.http.addParentDetails(this.parentDetailsForm).subscribe();
    window.location.reload();
  }

  clear() {
    this.parentDetailsRegistration.reset();
  }
}

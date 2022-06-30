import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentBankDetails } from 'app/FORMS_Model/parent-bank-details';
import { CommonService } from 'app/sharedservice/common.service';

@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.css']
})
export class Form6Component implements OnInit {

  constructor(public parentBankDetails: FormBuilder, public http: CommonService) { }
  parentBankDetailsForm: ParentBankDetails = {
    parentBankDetailsId: 0,
    ifscCode: '',
    bankName: '',
    branch: '',
    accountType: '',
    accountNo: '',
    liablityDetails: ''

  }
  parentBankDetailsRegistration: FormGroup;
  ngOnInit(): void {
    this.parentBankDetailsRegistration = this.parentBankDetails.group(
      {
        ifscCode: ['', [Validators.required]],
        bankName: ['', [Validators.required]],
        branch: ['', [Validators.required]],
        accountType: ['', [Validators.required]],
        accountNo: ['', [Validators.required]],
        liablityDetails: ['', [Validators.required]]
      }
    );
  }
  registerparentBankDetails() {
    this.parentBankDetailsForm.ifscCode = this.parentBankDetailsRegistration.get('ifscCode').value;
    this.parentBankDetailsForm.bankName = this.parentBankDetailsRegistration.get('bankName').value;
    this.parentBankDetailsForm.branch = this.parentBankDetailsRegistration.get('branch').value;
    this.parentBankDetailsForm.accountType = this.parentBankDetailsRegistration.get('accountType').value;
    this.parentBankDetailsForm.accountNo = this.parentBankDetailsRegistration.get('accountNo').value;
    this.parentBankDetailsForm.liablityDetails = this.parentBankDetailsRegistration.get('liablityDetails').value;
    this.http.addParentBankDetails(this.parentBankDetailsForm).subscribe();
  }
  clear() {
    this.parentBankDetailsRegistration.reset();
  }
}

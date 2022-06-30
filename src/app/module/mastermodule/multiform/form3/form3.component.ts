import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentBankDetails } from 'app/FORMS_Model/student-bank-details';
import { CommonService } from 'app/sharedservice/common.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  bankDetails: StudentBankDetails = {
    stuBankDetailsId: 0,
    ifscCode: '',
    bankName: '',
    branch: '',
    accountType: '',
    accountNo: '',
    liablityDetails: ''
  }
  StuBankDetailsForm: FormGroup;

  constructor(
    public StuBankDetails: FormBuilder,
    private http: CommonService) { }
  ngOnInit(): void {
    this.StuBankDetailsForm = this.StuBankDetails.group({
      ifscCode: ['', [Validators.required]],
      bankName: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      accountType: ['', [Validators.required]],
      accountNo: ['', [Validators.required]],
      liabillityDetails: ['', [Validators.required]]
    });
  }
  saveStuBankDetails() {
    this.bankDetails.ifscCode = this.StuBankDetailsForm.get('ifscCode').value;
    this.bankDetails.bankName = this.StuBankDetailsForm.get('bankName').value;
    this.bankDetails.branch = this.StuBankDetailsForm.get('branch').value;
    this.bankDetails.accountType = this.StuBankDetailsForm.get('accountType').value;
    this.bankDetails.accountNo = this.StuBankDetailsForm.get('accountNo').value;
    this.bankDetails.liablityDetails = this.StuBankDetailsForm.get('liabillityDetails').value;
    this.http.postStuBankDetails(this.bankDetails).subscribe();
    window.location.reload();
  }

  clear() {
    this.StuBankDetailsForm.reset();
  }
}

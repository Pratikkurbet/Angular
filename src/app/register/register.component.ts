import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'app/FORMS_Model/student';
import { CommonService } from 'app/sharedservice/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isValid = false;
  customer: Student = {
    sid: 0,
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobNo: '',
    emailId: '',
    password: '',
    confirmPassword: '',
  };

  customerRegisterationForm: FormGroup;
  constructor(
    private route: Router,
    public customerForm: FormBuilder,
    public http: CommonService
  ) {}
  ngOnInit(): void {
    this.customerRegisterationForm = this.customerForm.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobNo: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cnfPassword: ['', [Validators.required]],
    });
  }

  registerCustomer() {
    this.customer.title = this.customerRegisterationForm.get('title').value;
    this.customer.firstName =
      this.customerRegisterationForm.get('firstName').value;
    this.customer.middleName =
      this.customerRegisterationForm.get('middleName').value;
    this.customer.middleName =
      this.customerRegisterationForm.get('middleName').value;
    this.customer.lastName =
      this.customerRegisterationForm.get('lastName').value;
    this.customer.mobNo = this.customerRegisterationForm.get('mobNo').value;
    this.customer.emailId = this.customerRegisterationForm.get('emailId').value;
    this.customer.password =
      this.customerRegisterationForm.get('password').value;
    this.customer.confirmPassword =
      this.customerRegisterationForm.get('cnfPassword').value;
    console.log(this.customer);
    if (
      this.customerRegisterationForm.get('password').value ===
      this.customerRegisterationForm.get('cnfPassword').value
    ) {
      this.http.addCustomer(this.customer).subscribe();

      window.location.reload();
      alert('Registred Successfully');
    } else {
      alert('Set your password correctly!!');
      // window.location.reload();
    }
  }
  goToLogin() {
    this.route.navigate(['login_all']);
  }

  clear() {
    this.customerRegisterationForm.reset();
  }
}

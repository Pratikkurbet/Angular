import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'app/module/shared/common-service.service';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  u: user = {
    username: '',
    password: '',
    repassword: '',
    email: '',
  };
  username = '';
  password = '';
  constructor(private router: Router, private cs: CommonServiceService) {}
  ngOnInit() {}
  login(u) {
    console.log('login called');
    console.log(u.username, u.password);

    if (u.username === 'stu' && u.password === 'stu') {
      console.log('in emp');
      sessionStorage.setItem('role', 'admin');
      this.router.navigateByUrl('role/admin/adminbash');
    }

    if (u.username === 'manager' && u.password === 'manager') {
      console.log('in Manager');
      sessionStorage.setItem('role', 'manager');
      this.router.navigateByUrl('role/manager/homemanager');
    }

    // if (u.username === "stu" && u.password === "stu") {
    //   console.log("in student");
    //   sessionStorage.setItem("role", "student");
    //   this.router.navigateByUrl("role/student/studash");
    // }

    if (u.username === 'admin' && u.password === 'admin') {
      console.log('in emp');
      sessionStorage.setItem('role', 'emp');
      this.router.navigateByUrl('role/emp/empdash');
    }
    if (u.username === 'oe' && u.password === 'oe') {
      sessionStorage.setItem('role', 'operation');
      this.router.navigateByUrl('role/operation/oedash');
    }
    if (u.username === 'cm' && u.password === 'cm') {
      console.log(u.username, u.password);
      sessionStorage.setItem('role', 'cr');
      this.router.navigateByUrl('role/cr/credit');
    }
  }
  callToRegister() {}
}

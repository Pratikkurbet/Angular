import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StudentDetails } from "app/FORMS_Model/student-details";
import { CommonService } from "app/sharedservice/common.service";

@Component({
  selector: "app-form1",
  templateUrl: "./form1.component.html",
  styleUrls: ["./form1.component.css"],
})
export class Form1Component implements OnInit {
  constructor(
    public BasicStudentDetails: FormBuilder,
    private http: CommonService
  ) { }
  StuDetails: StudentDetails = {
    studentDetailsId: 0,  
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    sex: "",
    marksObtained: "",
    address: "",
    panNo: "",
    mobNo: "",
    emailId: "",
  };
  BasicStudentDetailsForm: FormGroup;
  ngOnInit(): void {
    this.BasicStudentDetailsForm = this.BasicStudentDetails.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      dateOfBirth: ["", [Validators.required]],
      sex: ["", [Validators.required]],
      marksObtained: ["", [Validators.required]],
      address: ["", [Validators.required]],
      panNo: ["", [Validators.required]],
      mobNo: ["", [Validators.required]],
      emailId: ["", [Validators.required]],
    });
  }

  saveBasicStudentDetails() {
    this.StuDetails.firstName =this.BasicStudentDetailsForm.get("firstName").value;
    this.StuDetails.lastName =this.BasicStudentDetailsForm.get("lastName").value;
    this.StuDetails.dateOfBirth = this.BasicStudentDetailsForm.get('dateOfBirth').value;
    this.StuDetails.sex = this.BasicStudentDetailsForm.get('sex').value;
    this.StuDetails.marksObtained = this.BasicStudentDetailsForm.get('marksObtained').value;
    this.StuDetails.address = this.BasicStudentDetailsForm.get('address').value;
    this.StuDetails.panNo = this.BasicStudentDetailsForm.get('panNo').value;
    this.StuDetails.mobNo = this.BasicStudentDetailsForm.get('mobNo').value;
    this.StuDetails.emailId = this.BasicStudentDetailsForm.get('emailId').value;
    this.http.postBasicStudentDetails(this.StuDetails).subscribe();
  }

  clear()
  {
    this.BasicStudentDetailsForm.reset();
  }
}

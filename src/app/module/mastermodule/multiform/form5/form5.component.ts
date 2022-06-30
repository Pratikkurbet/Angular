import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'app/sharedservice/common.service';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css'],
})
export class Form5Component implements OnInit {
  parentDocForm: FormGroup;

  parentAadhar: any;
  parentPan: any;
  parentPic: any;
  parentSign: any;
  incomeProof: any;
  guranterPic: any;
  guranterPan: any;
  constructor(private http: CommonService, public formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.parentDocForm = this.formBuilder.group({
      parentId: [],
    });
  }

  onSelectedFileParentAadhar(event: any) {
    this.parentAadhar = event.target.files[0];
  }
  onSelectedFileParentPan(event: any) {
    this.parentPan = event.target.files[0];
  }
  onSelectedFileParentPic(event: any) {
    this.parentPic = event.target.files[0];
  }
  onSelectedFileParentSign(event: any) {
    this.parentSign = event.target.files[0];
  }
  onSelectedFileIncomeProof(event: any) {
    this.incomeProof = event.target.files[0];
  }
  onSelectedFileGuranterPan(event: any) {
    this.guranterPan = event.target.files[0];
  }
  onSelectedFileGuranterPic(event: any) {
    this.guranterPic = event.target.files[0];
  }

  saveParentDocuments() {
    alert('Parent Documents has uploaded');
    const parentId = JSON.stringify(this.parentDocForm.value);
    console.log(parentId);

    // Create Object Formdata
    const parentUploadDocuments = new FormData();
    // Store File into formdata
    parentUploadDocuments.append('parentAddhar', this.parentAadhar);
    parentUploadDocuments.append('parentPan', this.parentPan);
    parentUploadDocuments.append('parentPic', this.parentPic);
    parentUploadDocuments.append('parentSign', this.parentSign);
    parentUploadDocuments.append('incomeproof', this.incomeProof);
    parentUploadDocuments.append('guranterpic', this.guranterPic);
    parentUploadDocuments.append('guranterpan', this.guranterPan);
    parentUploadDocuments.append('doc', parentId);
    this.http.postParentDocument(parentUploadDocuments).subscribe();
    window.location.reload();
  }
  clear() {
    this.parentDocForm.reset();
  }
}

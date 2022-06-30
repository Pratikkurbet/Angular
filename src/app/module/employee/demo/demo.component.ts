import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'app/sharedservice/common.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  regForm: FormGroup;
  selectedAttachfile: any


  constructor(private fb: FormBuilder, public http: CommonService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group(
      {
        toEmail: [''],
        fromEmail: [''],
        subject: [''],
        textBody: ['']
      }
    )
  }
  onselectedFile1(event: any) {
    this.selectedAttachfile = event.target.files[0];
  }
  sendEmail() {
    console.log('hiii');
    const application1 = JSON.stringify(this.regForm.value);
    const uploadDocument = new FormData();
    uploadDocument.append('Attachfile', this.selectedAttachfile);
    uploadDocument.append('toEmail', application1);
    uploadDocument.append('fromEmail', application1);
    uploadDocument.append('subject', application1);
    uploadDocument.append('textBody', application1);

    // this.es.sendEmail(this.regForm.value).subscribe();
    this.http.sendEmail(uploadDocument).subscribe();
    window.location.reload();

    // alert(application1)

  }


}

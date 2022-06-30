import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonServiceService } from 'app/module/shared/common-service.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(private fb:FormBuilder,public cs:CommonServiceService) { }

  ngOnInit(): void {
  }

  enquiryform=this.fb.group({
    enquiryCustomerId:[''],
	 enquiryCustomerName:[''],
	 enquiryCustomerMobileNo:[''],
	 enquiryCustomerAddress:[''],
	 enquiryCustomerEmailId:[''],
    enquiryCustomerUid:[''],
    enquiryCustomerPanNo:[''],
   enquiryCustomerDob:[''],
     occupation:[''],
     enquiryCustomerYearlyIncome:[''],
     cbilStatus:[''],
     status:['']





  })

  dataget()
  {
    console.log(JSON.stringify(this.enquiryform.value));

    this.cs.adddata(this.enquiryform.value).subscribe();
    window.location.reload();
  }

}

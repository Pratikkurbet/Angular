import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cibil } from 'app/model/cibil';
import { Customerdetails } from 'app/model/customerdetails';
import { EnquiryCustomer } from 'app/model/enquiry-customer';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {


    
  private posturl='http://localhost:8086/document/adddoc';

  constructor(private http:HttpClient) { }

  btn:boolean=true;
di:boolean=false;
color:string;
user:string="";
  ec:EnquiryCustomer={

    enquiryCustomerId:null,
    enquiryCustomerName:"",
    enquiryCustomerMobileNo:"",
    enquiryCustomerAddress:"",
    enquiryCustomerEmailId:"",
 enquiryCustomerUid:"",
  enquiryCustomerPanNo:"",
  enquiryCustomerDob:"",
  occupation:"",
  cbilStatus:"",
  status:""

  }
  postData(cibil:Cibil)
  {
  //  return this.http.post("http://localhost:8087/addcibil",cibil,{responseType:'text' as 'json'});
  cibil.enquiryCustomer=this.ec;
   alert(JSON.stringify(cibil));
    return this.http.post("http://localhost:8087/addcibil",cibil,{responseType:'text' as 'json'})
  }

   getData1()
   {
     return this.http.get("http://localhost:8087/getalldata");
   }

  
  getcibil()
  {
    return this.http.get("http://localhost:8087/getcibil");
  }

  adddata(ec:EnquiryCustomer)
  {
    return this.http.post('http://localhost:8087/adddata',ec,{responseType:'text' as 'json'});
  }

  getcibilData()
  {
    return this.http.get("http://localhost:8087/getall");
  }


  private saveurl='http://localhost:8086/saveCustomerDetail';
  private gateurl='http://localhost:8086/getCustomerDetail';



  // cust:Customerdetails={
  //   customerDetailId:null,
  //   customerName:" ",
  //   customerAddress:"",
  //   customerPincode:"",
  //   customerBranchId:null,
  //   customerBranch:"",
  //   customerPermenantAddress:"",
  //   customerLocalAddress:"",
  //   customerLocalPincode:"",
  //   status:"",
  //   customerTotalFamillyMember:null,
  //   dependantFamillyMember:null,
  //   customerContactNumber:null,
  //   requiredLoanAmount:"",
  //   guarantor:{
  //     guarantorId:null,
  //     guarantorName:"",
  //     guarantorMobileNo:"",
  //     guarantorUid:"",
  //     guarantorOccupation:""
  //   },
  //   dealerDetails:{
  //     dealerId:null,
  //     dealerName:"",
  //     dealerAddress:"",
  //     dealerContactNo:"",
  //     dealerAccountNo:"",
  //     accountType:"",
  //     status:"",
  //     bankmaster:{
  //       bankId:null,
  //       bankName:"",
  //       branchId:"",
  //       ifscCode:"",
  //       micrNo:"",
  //       status:""
  //     }
  //   },
  //   previousLonDetail:{
  //     previousLoanId:null,
  //     previousLoanType:"",
  //     previousLoanAmount:null,
  //     previousLoanTenuarPending:null,
  //     previousLoanEmiAmount:null,
  //     previousLoanLastPaidDate:"",
  //     previousLoanBankDetails:{
  //       bankId:null,
  //       bankName:"",
  //       branchId:"",
  //       ifscCode:"",
  //       micrNo:"",
  //       status:""
  //     }
  //   },
  //   vehicleDetail:{
  //     vehicleId:null,
  //     vehicleMake:"",
  //     vehicleModel:"",
  //     vehicleEngineType:"",
  //     vehicleColour:""
  //   }



  

  saveCustomerDetail(cu:Customerdetails){
    console.log(cu);
    // cu.dealerDetails=this.cust.dealerDetails;
    // cu.dealerDetails.bankmaster=this.cust.dealerDetails.bankmaster;
    // cu.vehicleDetail=this.cust.vehicleDetail;
    // cu.guarantor=this.cust.guarantor;
    // cu.previousLonDetail=this.cust.previousLonDetail;
    // cu.previousLonDetail.previousLoanBankDetails=this.cust.previousLonDetail.previousLoanBankDetails;
    
    return this.http.post(this.saveurl,cu,{responseType:'text' as 'json'});
  }

  getCustomerDetail(){

    return this.http.get(this.gateurl);
  }

  PostData(uploadDocument:any){
    console.log(uploadDocument);
    return this.http.post(this.posturl,uploadDocument,{responseType:'text' as 'json'}
    );
  }


}

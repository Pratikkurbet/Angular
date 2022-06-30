import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdmissionDetails } from 'app/FORMS_Model/admission-details';
import { ParentBankDetails } from 'app/FORMS_Model/parent-bank-details';
import { ParentDetails } from 'app/FORMS_Model/parent-details';
import { ParentDocument } from 'app/FORMS_Model/parent-document';
import { Student } from 'app/FORMS_Model/student';
import { StudentBankDetails } from 'app/FORMS_Model/student-bank-details';
import { StudentDetails } from 'app/FORMS_Model/student-details';
import { StudentDocuments } from 'app/FORMS_Model/student-documents';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  // url:string='http://localhost:3000/Student';
  // Url for sav student
  url = 'http://localhost:9090';
  // url for get student
  getstu = 'http://localhost:9090/getAllStudent';
  // URL for delete student
  deleteData1 = 'http://localhost:9090/deleteStudent/';
  // URL for Basic Student Details
  saveStudentDetails = 'http://localhost:9090/saveStudentDetails';
  // URL get basic student details
  getStuDetails = 'http://localhost:9090/getStudentDetails';
  // URL for Student Bank Details
  saveStuBankDetails = 'http://localhost:9090/saveStudentBankDetails';
  // URL for Student Bank Details
  StuBankDetails = 'http://localhost:9090/getStudentBankDetails';
  // URL for student document details
  saveStuDocuments = 'http://localhost:9090/studentDocuments';
  // URL for getting student documents
  getStuDocs = 'http://localhost:9090/getStudentDocuments';
  // URL for parent details
  saveParentDocuments = 'http://localhost:9090/saveParentDetails';
  // URL for get Parent Details
  getPInfo = 'http://localhost:9090/getParentDetails';
  // URL for parent bank details
  saveParentBankDetails = 'http://localhost:9090/saveParentBankDetails';
  // URL for get Parent Bank Details
  getPBankDetails = 'http://localhost:9090/getParentBankDetails';
  // URL for admission details
  saveAdmissionDetails = 'http://localhost:9090/saveAdmissionDetails';
  // URL for get Admission Details
  getAdmDetails = 'http://localhost:9090/getAdmissionDetails';
  // URL for Parent documents upload
  saveParentDocs = 'http://localhost:9090/parentdocupload';
  // URL for get Parent docs
  getPdocs = 'http://localhost:9090/getparentdoc';
  emailSendUrl = 'http://localhost:9090/mail';
  constructor(private httpService: HttpClient) { }

  addCustomer(cust: Student): Observable<Student> {
    console.log('data saved');
    return this.httpService.post<Student>(this.url + '/saveStudent', cust);
  }
  getData(): Observable<Student[]> {
    return this.httpService.get<Student[]>(this.getstu);
  }
  deleteData(sid: number) {
    console.log('deleteData Calling');
    return this.httpService.delete(this.deleteData1 + sid);
  }

  postBasicStudentDetails(basicStuDetail: StudentDetails) {
    return this.httpService.post(this.saveStudentDetails, basicStuDetail);
  }
  getBasicStudentDetails(): Observable<any> {
    console.log('getting student data');
    return this.httpService.get<any>(this.getStuDetails);
  }
  getstuData(): Observable<any> {
    return this.httpService.get<StudentDocuments[]>('http://localhost:9090/getStudentDocuments');
  }
  postStuBankDetails(stubankdetail: StudentBankDetails) {
    return this.httpService.post(this.saveStuBankDetails, stubankdetail);
  }
  getStuBankDetails(): Observable<StudentBankDetails[]> {
    return this.httpService.get<StudentBankDetails[]>(this.StuBankDetails);
  }
  addParentDetails(parentDetails: ParentDetails): Observable<ParentDetails> {
    return this.httpService.post<ParentDetails>(this.saveParentDocuments, parentDetails);
  }
  getParentDetails(): Observable<ParentDetails[]> {
    return this.httpService.get<ParentDetails[]>(this.getPInfo);
  }
  addParentBankDetails(bankDetails: ParentBankDetails): Observable<ParentBankDetails> {
    return this.httpService.post<ParentBankDetails>(this.saveParentBankDetails, bankDetails);
  }
  getParentBankDetails(): Observable<ParentBankDetails[]> {
    return this.httpService.get<ParentBankDetails[]>(this.getPBankDetails);
  }
  addAdmissionDetails(admissionDetails: AdmissionDetails): Observable<AdmissionDetails> {
    return this.httpService.post<AdmissionDetails>(this.saveAdmissionDetails, admissionDetails);
  }
  getAdmissionDetails(): Observable<AdmissionDetails[]> {
    return this.httpService.get<AdmissionDetails[]>(this.getAdmDetails);
  }
  postStuDocument(uploadDocument: any): Observable<StudentDocuments> {
    return this.httpService.post<StudentDocuments>(this.saveStuDocuments, uploadDocument);
  }
  postParentDocument(uploadDocument: any): Observable<ParentDocument> {
    return this.httpService.post<ParentDocument>(this.saveParentDocs, uploadDocument);
  }
  getParentDocuments(): Observable<ParentDocument[]> {
    return this.httpService.get<ParentDocument[]>(this.getPdocs);
  }
  sendEmail(em: any) {
      return this.httpService.post(this.emailSendUrl, em);
    }
}

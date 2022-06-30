import { Component, OnInit } from '@angular/core';
import { Student } from 'app/FORMS_Model/student';
import { CommonService } from 'app/sharedservice/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  studentinfo: Student[];
  constructor(public common: CommonService) {}
  ngOnInit(): void {
    this.common.getData().subscribe((data) => (this.studentinfo = data));
  }
  deleteData(sid: number) {
    this.common.deleteData(sid).subscribe();
    window.location.reload();
  }
  nextDoc() {
    alert(this.common.getData());
  }
}

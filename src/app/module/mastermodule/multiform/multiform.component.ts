import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-multiform",
  templateUrl: "./multiform.component.html",
  styleUrls: ["./multiform.component.css"],
})
export class MultiformComponent implements OnInit {
  constructor() {}

  form1: boolean = false;
  form2: boolean = false;
  form3: boolean = false;
  form4: boolean = false;
  form5: boolean = false;
  form6: boolean = false;
  form7: boolean = false;
  form8: boolean = false;

  ngOnInit(): void {}
  displayForm1() {
    this.form1 = true;
    this.form2 = false;
    this.form3 = false;
    this.form4 = false;
    this.form5 = false;
    this.form6 = false;
    this.form7 = false;
    this.form8 = false;
  }

  displayForm2() {
    this.form1 = false;
    this.form2 = true;
    this.form3 = false;
    this.form4 = false;
    this.form5 = false;
    this.form6 = false;
    this.form7 = false;
    this.form8 = false;
  }
  displayForm3() {
    this.form1 = false;
    this.form2 = false;
    this.form3 = true;
    this.form4 = false;
    this.form5 = false;
    this.form6 = false;
    this.form7 = false;
    this.form8 = false;
  }
  displayForm4() {
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.form4 = true;
    this.form5 = false;
    this.form6 = false;
    this.form7 = false;
    this.form8 = false;
  }
  displayForm5() {
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.form4 = false;
    this.form5 = true;
    this.form6 = false;
    this.form7 = false;
    this.form8 = false;
  }
  displayForm6() {
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.form4 = false;
    this.form5 = false;
    this.form6 = true;
    this.form7 = false;
    this.form8 = false;
  }
  displayForm7() {
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.form4 = false;
    this.form5 = false;
    this.form6 = false;
    this.form7 = true;
    this.form8 = false;
  }
  displayForm8() {
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.form4 = false;
    this.form5 = false;
    this.form6 = false;
    this.form7 = false;
    this.form8 = true;
  }
}

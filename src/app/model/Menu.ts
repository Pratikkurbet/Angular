import { CommonServiceService } from "app/module/shared/common-service.service";

export class Menu {
  public static menu: Array<any> = [
    {
      admin: [
        {
          path: "adminbash",
          title: "Dashbord",
          icon: "pe-7s-graph",
          class: "",
        },
        {
          path: "city",
          title: "Create Student",
          icon: "pe-7s-graph",
          class: "",
        },
        {
          path: "multiform",
          title: "Document Add",
          icon: "pe-7s-graph",
          class: "",
        },
      ],
      emp: [
        
        { path: "empdash", title: "dashbord", icon: "pe-7s-graph", class: "" },
        { path: "demo", title: "Mail Activity", icon: "pe-7s-graph", class: "" },
      ],
      student: [
        { path: "studash", title: "studata", icon: "pe-7s-graph", class: "" },
        { path: "studemo", title: "Info", icon: "pe-7s-graph", class: "" },
      ],
      manager: [
        {
          path: "homemanager",
          title: "Home",
          icon: "pe-7s-graph",
          class: "",
        },
        { path: "loandata", title: "LoanData", icon: "pe-7s-graph", class: "" },
      ],

      operation: [
        { path: "oedash", title: "DASHBORD", icon: "pe-7s-graph", class: "" },
        {
          path: "oeenq",
          title: "VIEW ENQUIERY",
          icon: "pe-7s-graph",
          class: "",
        },
        {
          path: "oecustomer",
          title: "VIEW CUSTOMER",
          icon: "pe-7s-graph",
          class: "",
        },
        { path: "cibil", title: "CIBILSCORE", icon: "pe-7s-graph", class: "" },
      ],
      relation: [
        { path: "oeenquiry", title: "ENQUERY", icon: "pe-7s-graph", class: "" },
        {
          path: "oecustomer",
          title: "REGISTER CUSTOMER",
          icon: "pe-7s-graph",
          class: "",
        },
        {
          path: "oedocument",
          title: "UPLOAD DOCUMENT",
          icon: "pe-7s-graph",
          class: "",
        },
      ],
      cr: [
        { path: "credit", title: "ENQUERY", icon: "pe-7s-graph", class: "" },
      ],
      ab: [
        { path: "abcdash", title: "DASHBOARD", icon: "pe-7s-graph", class: "" },
      ],

      fileinitiate: [
        {
          path: "document",
          title: "DOCUMENTS DETAILS",
          icon: "pe-7s-graph",
          class: "",
        },
        {
          path: "customer",
          title: "CUSTOMER DETAILS",
          icon: "pe-7s-graph",
          class: "",
        },
        {
          path: "dashboard",
          title: "DASHBOARD",
          icon: "fa fa-file-word-o",
          class: "",
        },
      ],
    },
  ];
}

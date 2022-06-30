import { Dealermaster } from "./dealermaster";
import { Gaurantordetails } from "./gaurantordetails";
import { Previousloandetails } from "./previousloandetails";
import { Vehicledetails } from "./vehicledetails";

export class Customerdetails {
    customerDetailId:number;
    customerName:string;
    customerAddress:string;
    customerPincode:string;
    customerBranchId:number;
    customerBranch:string;
    customerPermenantAddress:string;
    customerLocalAddress:string;
    customerLocalPincode:string;
    status:string;
    customerTotalFamillyMember:number;
    dependantFamillyMember:number;
    customerContactNumber:number;
    requiredLoanAmount:string;
    guarantor:Gaurantordetails;
    dealerDetails:Dealermaster;
    previousLonDetail:Previousloandetails;
    vehicleDetail:Vehicledetails;
}

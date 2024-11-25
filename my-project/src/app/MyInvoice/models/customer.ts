import { Invoice } from "./invoice"
function Customer(){
    constructor(){}

company: string = "";
companyNIP : string= "";
city : string= "";
street : string= "";
houseNumber: string = "";
flatNumber : string= "";
zipCode: string = "";
exampleFormControlTextarea: string = "";
lastElement: string = ""; // IT
flexCheckDefault: string = true;

getAddress():string {
    return `${this.city} ${this.zipCode} ${this.ulica} ${this.flatNumber}`;
}
getCustomerInfo():string {
    return `${this.company} (${this.companyNIP})`;
}
}

class Supplier extends Customer{
    constructor(accountNumber: any){
        super();
        accountNumber = accountNumber;
    }
    accountNumber:string  = "";
    invoices:Invoice[] = [];
}




// function Supplier(accountNumber){
//     this.accountNumber= accountNumber;
//     this.invoice= [];
// }

// Supplier.prototype = new Customer();


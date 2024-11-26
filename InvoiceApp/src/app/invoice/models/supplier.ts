import { Invoice } from './invoice';
import { Customer } from './customer';

export class Supplier extends Customer{
    constructor (accountNumber: any){
        super();
        accountNumber = accountNumber;
    }
    accountNumber:string ="";
    invoices:Invoice[] = [];
}

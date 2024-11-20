"use strict";
class Suplier extends Customer {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        super();
        this.invoice = [];
    }
}

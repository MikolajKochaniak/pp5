import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list-component',
  standalone: false,
  templateUrl: './customer-list-component.component.html',
  styleUrl: './customer-list-component.component.scss'
})
export class CustomerListComponentComponent {
  customerList: Customer[];
constructor(
  private customerService: CustomerService){
    console.log(this.customerService.getCustomer());
    this.customerList = this.customerService.getCustomer();
  }
}

import { Component } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-list-component',
  standalone: false,
  templateUrl: './customer-list-component.component.html',
  styleUrl: './customer-list-component.component.scss'
})
export class CustomerListComponentComponent {

    customer: Customer = new Customer();
    
    zapiszDane(){
      console.log(this.customer)
    }
}

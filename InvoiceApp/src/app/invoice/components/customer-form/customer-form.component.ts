import { Component } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss',
  standalone: false
})
export class CustomerFormComponent {
  customer: Customer = new Customer();
    
    zapiszDane(){
      console.log(this.customer)
    }
}

import { Component } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss',
  standalone: false
})
export class CustomerFormComponent {

  constructor(
    private customerService: CustomerService,
    private router: Router
  ){}
  customer: Customer = new Customer();

  saveData(){
    console.log(this.customer);
    this.customerService.addCustomer(this.customer)
    this.router.navigate(["/invoice/customer-list"])
  }
    
    
}

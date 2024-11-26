import { Component } from '@angular/core';
import { Supplier } from '../../models/supplier';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss',
  standalone: false
})
export class CustomerFormComponent {
  testVariable: Supplier = new Supplier("lala")
}

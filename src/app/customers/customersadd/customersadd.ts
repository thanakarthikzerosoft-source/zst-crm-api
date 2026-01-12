import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customersadd',
  imports: [CommonModule, FormsModule],
  templateUrl: './customersadd.html',
  styleUrl: './customersadd.css',
})
export class Customersadd {
  customer = {
    name: '',
    email: '',
    mobile: '',
    notes: ''
  };

  constructor(private router: Router) {}

  saveCustomer() {
    console.log('Customer saved:', this.customer);

    // Later: send to API
    // this.http.post('/api/customers', this.customer)

    this.router.navigate(['/customers']);
  }

  clearForm() {
    this.customer = {
      name: '',
      email: '',
      mobile: '',
      notes: ''
    };
  }

  goBack() {
    this.router.navigate(['/customers']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customerslist',
  imports: [CommonModule],
  templateUrl: './customerslist.html',
  styleUrl: './customerslist.css',
})
export class Customerslist {
  customers = [
    { id: 1, name: 'Adekunle Adebayo', email: 'adekunle@mail.com', phone: '9876543210', status: 'Active' },
    { id: 2, name: 'Amina Bello', email: 'amina@mail.com', phone: '9123456780', status: 'Active' },
    { id: 3, name: 'Kwame Mensah', email: 'kwame@mail.com', phone: '9988776655', status: 'Active' },
    { id: 4, name: 'Zanele Dlamini', email: 'zanele@mail.com', phone: '9876501234', status: 'Active' },
    { id: 5, name: 'Tunde Ogunleye', email: 'tunde@mail.com', phone: '9090909090', status: 'Active' },
    { id: 6, name: 'Nkiru Okafor', email: 'nkiru@mail.com', phone: '9887766554', status: 'Active' },
    { id: 7, name: 'Samuel Mwangi', email: 'mwangi@mail.com', phone: '9876123456', status: 'Active' },
    { id: 8, name: 'Yaa Asantewaa', email: 'yaa@mail.com', phone: '9797979797', status: 'Active' },
    { id: 9, name: 'Chinedu Obi', email: 'chinedu@mail.com', phone: '9666555444', status: 'Active' },
    { id: 10, name: 'Thabo Mokoena', email: 'thabo@mail.com', phone: '9555666777', status: 'Active' }
  ];

  viewCustomer(id: number) {
    console.log('Edit Customer:', id);
    this.router.navigate(['/customers/view', [id]]);
  }




  editCustomer(id: number, event: Event) {
    event.stopPropagation();
    console.log('Edit', id);
  }

  deleteCustomer(id: number, event: Event) {
    event.stopPropagation();
    console.log('Delete', id);
  }


  get totalCustomers(): number {
    return this.customers.length;
  }




  constructor(private router: Router) { }
  Addcustomers() {
    this.router.navigate(['/customers/add']);
  }
}

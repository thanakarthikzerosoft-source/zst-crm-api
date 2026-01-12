import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from '../../header/header';

@Component({
  selector: 'app-leadslist',
  imports: [CommonModule],
  templateUrl: './leadslist.html',
  styleUrl: './leadslist.css',
})
export class Leadslist {

  leads = [
  { id: 1, name: 'Juan Carlos Rojas', email: 'juan@mail.com', phone: '9876543210', status: 'Active' },
  { id: 2, name: 'María Fernanda Quispe', email: 'maria@mail.com', phone: '9123456780', status: 'Active' },
  { id: 3, name: 'Luis Alberto Huamán', email: 'luis@mail.com', phone: '9988776655', status: 'Active' },
  { id: 4, name: 'Rosa Elena Chávez', email: 'rosa@mail.com', phone: '9876501234', status: 'Active' },
  { id: 5, name: 'José Antonio Flores', email: 'jose@mail.com', phone: '9090909090', status: 'Active' },
  { id: 6, name: 'Carmen Lucía Paredes', email: 'carmen@mail.com', phone: '9887766554', status: 'Active' },
  { id: 7, name: 'Miguel Ángel Salazar', email: 'miguel@mail.com', phone: '9876123456', status: 'Active' },
  { id: 8, name: 'Ana Sofía Cárdenas', email: 'ana@mail.com', phone: '9797979797', status: 'Active' },
  { id: 9, name: 'Pedro Manuel Torres', email: 'pedro@mail.com', phone: '9666555444', status: 'Active' },
  { id: 10, name: 'Valeria Jiménez', email: 'valeria@mail.com', phone: '9555666777', status: 'Active' }
];




  editLead(id: number) {
    console.log('Edit lead:', id);
  }

  deleteLead(id: number) {
    console.log('Delete lead:', id);
  }

  get totalLeads(): number {
  return this.leads.length;
}




  constructor(private router: Router) {}
  AddLeads() {
  this.router.navigate(['/leads/add']);
}
}

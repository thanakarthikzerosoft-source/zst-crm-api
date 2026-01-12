import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Layout } from './layout/layout';
import { Leadslist } from './leads/leadslist/leadslist';
import { Leadsadd } from './leads/leadsadd/leadsadd';
import { Customerslist } from './customers/customerslist/customerslist';
import { Customersadd } from './customers/customersadd/customersadd';

export const routes: Routes = [
  { path: '', redirectTo: 'leads', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  {
    path: '',
    component: Layout,
    children: [
      { path: 'leads', component: Leadslist },
      { path: 'leads/add', component: Leadsadd },
      { path: 'customers', component: Customerslist },
      { path: 'customers/add', component: Customersadd },
      
    ]
  },

  { path: '**', redirectTo: 'leads' },
  
  
];

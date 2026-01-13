import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-leadsadd',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './leadsadd.html',
  styleUrl: './leadsadd.css',
})
export class Leadsadd {

  lead = {
    first_name: '',
    last_name: '',
    lead_assignee: '',
    lead_status: '',
    mobile: '',
    email: '',
    company_name: '',
    industry_type: '',
    lead_source: '',
    website: '',
    door_no: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zip_code: '',
    description: '',
  };

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  async saveLead() {
    const apiUrl = 'http://127.0.0.1:8000/api/leads';
    console.log('Lead saved successfully:', this.lead);
    try {
      const response = await firstValueFrom(this.http.post(apiUrl, this.lead));
      console.log('Lead saved successfully:', response);
      this.router.navigate(['/leads']);
    } catch (error) {
      console.error('Error saving lead:', error);
      // Optionally show user-friendly error message
      alert('Failed to save lead. Please try again.');
    }
  }

  clearForm() {
    this.lead = {
      first_name: '',
      last_name: '',
      lead_assignee: '',
      lead_status: '',
      mobile: '',
      email: '',
      company_name: '',
      industry_type: '',
      lead_source: '',
      website: '',
      door_no: '',
      street: '',
      city: '',
      state: '',
      country: '',
      zip_code: '',
      description: '',
    };
  }

  goBack() {
    this.router.navigate(['/leads']);
  }
}
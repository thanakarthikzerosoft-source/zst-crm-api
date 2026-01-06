import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  agreeTerms: boolean = false;

  constructor(private router: Router) {}

  register() {
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!this.agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    alert('Registration successful: ' + this.fullName);
    
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
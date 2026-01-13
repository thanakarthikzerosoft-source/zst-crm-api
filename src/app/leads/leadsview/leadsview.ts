import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leadsview',
  imports: [CommonModule, FormsModule],
  templateUrl: './leadsview.html',
  styleUrl: './leadsview.css',
})
export class Leadsview {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/leads']);
  }

}

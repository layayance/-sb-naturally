import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prestations.html',
  styleUrl: './prestations.scss',
})
export class PrestationsComponent {

  selected = 'all';

  setFilter(value: string) {
    this.selected = value;
  }

}

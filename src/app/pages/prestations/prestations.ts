import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './prestations.html',
  styleUrl: './prestations.scss',
})
export class PrestationsComponent {

  animations =  [

    trigger('fade', [

      transition(':enter', [

        style({ opacity: 0, transform: 'translateY(10px)' }),

        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))

      ])

    ])

  ]

  selected = 'all';

  setFilter(value: string) {
    this.selected = value;
  }

}

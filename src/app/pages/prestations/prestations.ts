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
  


  prestations = [
    

    {

      title: 'Tresses africaines',

      desc: 'Stylisation protectrice adaptée à tous types de cheveux.',

      price: 'À partir de 40€'

    },

    {

      title: 'Nattes collées',

      desc: 'Style élégant et durable pour toutes occasions.',

      price: 'À partir de 30€'

    },

    {

      title: 'Twists',

      desc: 'Look naturel et moderne, léger et confortable.',

      price: 'À partir de 50€'

    },

    {

      title: 'Coiffure événementielle',

      desc: 'Mariage, fête, shooting photo…',

      price: 'Sur devis'

    }

  ];

}

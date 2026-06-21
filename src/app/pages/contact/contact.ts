import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

/** @title Champ de formulaire simple */ 


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {

  // sendToWhatsApp() {
  //   const phoneNumber = '+33759236988';
  //   window.open(`https://wa.me/${phoneNumber}`, '_blank');
  // }

//    name = '';

//   email = '';

//   phone = '';

//   message = '';

//   sendToWhatsApp() {

//     const phoneNumber = '33759236988';

//     const text = `

// Bonjour SB NATURALLY 🌿

// Nom : ${this.name}

// Email : ${this.email}

// Téléphone : ${this.phone}

// Message :

// ${this.message}

//     `;

//     const url =

//     `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

//     window.open(url, '_blank');

//   }

name = '';

phone = '';

service = '';

date = '';

message = '';

sendToWhatsApp() {

const phoneNumber = '33759236988';

const text = 

`🌿 SB NATURALLY - Rendez-vous

👤 Nom : ${this.name}

📞 Téléphone : ${this.phone}

💆 Prestation :

${this.service}

📅 Date souhaitée :

${this.date}

💬 Message :

${this.message}`;

const url =

`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

window.open(url,'_blank');

}

}

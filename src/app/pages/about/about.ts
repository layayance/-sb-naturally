import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ MatButtonModule, 
    MatIcon],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {}

import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { PrestationsComponent } from './pages/prestations/prestations';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';


export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'prestations',
    component: PrestationsComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  }

];
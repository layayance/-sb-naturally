import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { PrestationsComponent } from './pages/prestations/prestations';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';


export const routes: Routes = [

  {
    path:'',redirectTo:'home', pathMatch:'full'
  },

  {
    path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },

  {
    path:'prestations',
    loadComponent: () => import('./pages/prestations/prestations').then(m=>m.PrestationsComponent)
  },

  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)
  },

  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
  }

];
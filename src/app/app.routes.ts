import { Routes } from '@angular/router';
import {LoginComponent} from "./pantallas/login/login.component";
import {BookingAdministrationComponent} from "./pantallas/booking-administration/booking-administration.component";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pantallas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'registro',
    loadComponent: () => import('./pantallas/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'booking-administration',
    component: BookingAdministrationComponent,
  },
];

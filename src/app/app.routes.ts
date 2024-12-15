import {Routes} from '@angular/router';
import {LoginComponent} from "./pantallas/login/login.component";
import {BookingAdministrationComponent} from "./pantallas/booking-administration/booking-administration.component";
import {VehicleAdministrationComponent} from "./pantallas/vehicle-administration/vehicle-administration.component";
import {VehicleCategoryComponent} from "./pantallas/vehicle-category/vehicle-category.component";

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
  {
    path: 'vehicle-administration',
    component: VehicleAdministrationComponent
  },
  {
    path: 'vehicle-category',
    component: VehicleCategoryComponent
  }
];

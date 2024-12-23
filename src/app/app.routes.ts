import {Routes} from '@angular/router';
import {LoginComponent} from "./pantallas/login/login.component";
import {BookingAdministrationComponent} from "./pantallas/booking-administration/booking-administration.component";
import {VehicleAdministrationComponent} from "./pantallas/vehicle-administration/vehicle-administration.component";
import {VehicleCategoryComponent} from "./pantallas/vehicle-category/vehicle-category.component";
import {VehicleEditComponent} from "./pantallas/vehicle-edit/vehicle-edit.component";
import {Error404Component} from "./pantallas/error404/error404.component";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pantallas/home/home.page').then((m) => m.HomePage),
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
  },
  {
    path: 'vehicle-edit/:id',
    component: VehicleEditComponent
  },
  {
    path: 'vehicle-create',
    component: VehicleEditComponent
  },
   {
    path: '**',
    component: Error404Component,
  },
];

import {Component, OnInit} from '@angular/core';
import {
  IonButton,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {NavarComponent} from '../../component/navar/navar.component';
import {IonicModule} from '@ionic/angular';
import {TarjetaCocheComponent} from "../../component/tarjeta-coche/tarjeta-coche.component";
import {VehicleService} from "../../service/vehicle.service";
import {Vehicle} from "../../models/Vehicle";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, FormsModule, IonInput, IonLabel, IonItem, IonButton, IonText, NavarComponent, IonicModule, TarjetaCocheComponent, NgForOf],
})
export class HomePage implements OnInit {
  protected vehicles: Vehicle[] = [];

  constructor(private router: Router, private vehicleService: VehicleService) {
  }


  ngOnInit() {
    this.vehicleService.getAllVehicles().subscribe({
      next: (vehicles) => {
        const mappedVehicles = vehicles.map(vehicle => new Vehicle(
          vehicle.id,
          vehicle.model,
          new Date(vehicle.year),
          vehicle.price,
          vehicle.image,
          vehicle.brand,
          vehicle.status
        ));
        console.log(mappedVehicles);
        this.vehicles = mappedVehicles
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
    });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from "../../models/Vehicle";
import {IonicModule} from "@ionic/angular";
import {VehicleService} from "../../service/vehicle.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tajeta-vehiculo-admin',
  templateUrl: './tajeta-vehiculo-admin.component.html',
  styleUrls: ['./tajeta-vehiculo-admin.component.scss'],
  imports: [
    IonicModule,
    RouterLink
  ],
  standalone: true
})
export class TajetaVehiculoAdminComponent  implements OnInit {
  @Input() vehicle: Vehicle = new Vehicle(0, "SEAT", new Date(), 0, "https://storage.googleapis.com/pod_public/1300/173321.jpg", "Ibiza", "");

  constructor() { }

  ngOnInit() {

  }

}

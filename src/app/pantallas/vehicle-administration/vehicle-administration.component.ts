import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavarComponent} from "../../component/navar/navar.component";
import {IonicModule} from "@ionic/angular";
import {TarjetaCocheComponent} from "../../component/tarjeta-coche/tarjeta-coche.component";
import {VehicleService} from "../../service/vehicle.service";
import {Vehicle} from "../../models/Vehicle";
import {NgForOf} from "@angular/common";
import {TajetaVehiculoAdminComponent} from "../../component/tajeta-vehiculo-admin/tajeta-vehiculo-admin.component";
import {
  TajetaVehiculoAdministrationComponent
} from "../../component/tajeta-vehiculo-administration/tajeta-vehiculo-administration.component";
import {addIcons} from "ionicons";
import {add, create} from "ionicons/icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicle-administration',
  templateUrl: './vehicle-administration.component.html',
  styleUrls: ['./vehicle-administration.component.scss'],
  imports: [
    NavarComponent,
    IonicModule,
    TarjetaCocheComponent,
    NgForOf,
    TajetaVehiculoAdminComponent,
    TajetaVehiculoAdministrationComponent
  ],
  standalone: true
})
export class VehicleAdministrationComponent  implements OnInit, AfterViewInit {
  vehicles:Vehicle[] = [];

  constructor(private vehicleService:VehicleService, private router:Router) {
    addIcons({add})
  }

  ngOnInit() {
    console.log("hola")
    this.vehicleService.getAllVehicles().subscribe({
      next: (data: Vehicle[]) => {
        this.vehicles = this.mapVehicle(data);
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  ngAfterViewInit() {
  }

  mapVehicle(vehicle:any):Vehicle[] {
    return vehicle.map((vehicle: any):Vehicle => {
      return new Vehicle(
        vehicle.id,
        vehicle.model,
        new Date(vehicle.year),
        vehicle.price,
        vehicle.image,
        vehicle.brand,
        vehicle.status
      );
    });
  }

  createCar(){
    this.router.navigate(['/vehicle-create'])
  }

  protected readonly create = create;
}

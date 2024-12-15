import { Component, OnInit } from '@angular/core';
import {NavarComponent} from "../../component/navar/navar.component";
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {menuOutline} from "ionicons/icons";
import {BrandServiceService} from "../../service/brand-service.service";
import {NgForOf} from "@angular/common";
import {Brand} from "../../models/Brand";
import {VehicleService} from "../../service/vehicle.service";
import {Vehicle} from "../../models/Vehicle";
import {TarjetaCocheComponent} from "../../component/tarjeta-coche/tarjeta-coche.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-vehicle-category',
  templateUrl: './vehicle-category.component.html',
  styleUrls: ['./vehicle-category.component.scss'],
  imports: [
    NavarComponent,
    IonicModule,
    NgForOf,
    TarjetaCocheComponent,
    FormsModule
  ],
  standalone: true
})
export class VehicleCategoryComponent  implements OnInit {
  brands: Brand[] = [];
  idBrandSelected: number = -1;
  modelName: string = '';
  price: number = 0;
  minPrice: number = 99999;
  maxPrice: number = 0;
  vehicles: Vehicle[] = [];

  constructor(
    private brandService: BrandServiceService,
    private vehicleService: VehicleService
  ) {
    addIcons({menuOutline})
  }

  ngOnInit() {
    this.recuest();
  }

  selectecBrand(idBrand: number){
    console.log(idBrand);
    this.idBrandSelected = idBrand;
    this.seach();
  }

  seach(){
    if (this.idBrandSelected === -1 && this.modelName === '') {
      this.vehicleService.getAllVehicles().subscribe({
        next: (response) => {
          response.forEach((vehicle) => {
            if (vehicle.price > this.maxPrice) {
              this.maxPrice = vehicle.price;
            } else if (vehicle.price < this.minPrice) {
              this.minPrice = vehicle.price;
            }
          })
          console.log(response, "Precio maximo: ", this.maxPrice, "Precio minimo: ", this.minPrice);
          this.vehicles = this.mapVehicles(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
      return;
    } else if (this.idBrandSelected !== -1 && this.modelName === '') {
      this.vehicleService.getVehicleByBrand(this.idBrandSelected).subscribe({
        next: (response) => {
          console.log(response);
          this.vehicles = this.mapVehicles(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else if (this.idBrandSelected === -1 && this.modelName !== '') {
      console.log(this.modelName);
      this.vehicleService.getVehicleByModel(this.modelName).subscribe({
        next: (response) => {
          console.log(response);
          this.vehicles = this.mapVehicles(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else if (this.idBrandSelected !== -1 && this.modelName !== '') {
      console.log(this.modelName);
      this.vehicleService.getVehicleByModelAndBrand(this.modelName, this.idBrandSelected).subscribe({
        next: (response) => {
          console.log(response);
          this.vehicles = this.mapVehicles(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  mapVehicles(response: Vehicle[]) {
    return response.map(item => new Vehicle(
      item.id,
      item.model,
      new Date(item.year),
      item.price,
      item.image,
      item.brand,
      item.status
    ));
  }

  recuest() {
    this.brandService.getBrands().subscribe({
      next: (response) => {
        this.brands = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.seach();
  }
}

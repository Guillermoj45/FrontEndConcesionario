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
import {NgxSliderModule, Options} from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-vehicle-category',
  templateUrl: './vehicle-category.component.html',
  styleUrls: ['./vehicle-category.component.scss'],
  imports: [
    NavarComponent,
    IonicModule,
    NgForOf,
    TarjetaCocheComponent,
    FormsModule,
    NgxSliderModule
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

  minPriceSelected: number = 0;
  maxPriceSelected: number = 9999999;

  vehicles: Vehicle[] = [];
  sliderOptions: Options = {
    floor: 0,
    ceil: 10,
    step: 1
  };


  constructor(
    private brandService: BrandServiceService,
    private vehicleService: VehicleService
  ) {
    addIcons({menuOutline})
  }

  ngOnInit() {
    this.recuest();

  }

  refresco(){
    this.sliderOptions = {
      floor: this.minPrice,
      ceil: this.maxPrice,
      step: 1
    };
  }

  selectecBrand(idBrand: number){
    console.log(idBrand);
    this.idBrandSelected = idBrand;
    this.seach();
  }

  priceSelected(){
    this.seach()
  }

  seachPrice(){
    const filteredVehicles: Vehicle[] = [];
    this.minPriceSelected = 0
    this.maxPriceSelected = 9999999
    for (const vehicle of this.vehicles) {
      console.log(vehicle.price, this.minPriceSelected, this.maxPriceSelected);
      if (vehicle.price >= this.minPriceSelected && vehicle.price <= this.maxPriceSelected) {
        filteredVehicles.push(vehicle);
      }
    }
    this.vehicles = filteredVehicles;
  }

  seach(){
    if (this.idBrandSelected === -1 && this.modelName === '') {
      this.vehicleService.getAllVehicles().subscribe({
        next: (response) => {
          console.log(response, "Precio maximo: ", this.maxPrice, "Precio minimo: ", this.minPrice);
          this.vehicles = this.mapVehicles(response);
          this.seachPrice()
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
          this.seachPrice()
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
          this.seachPrice()
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
          this.seachPrice()
        },
        error: (error) => {
          console.log(error);
        }
      });
    }

  }

  mapVehicles(response: Vehicle[]) {
    this.refresco();
    response.forEach((vehicle) => {
      if (vehicle.price > this.maxPrice) {
        this.maxPrice = vehicle.price;
      } else if (vehicle.price < this.minPrice) {
        this.minPrice = vehicle.price;
      }
    })
    console.log(this.maxPrice, this.minPrice);
    console.log("refrescafsdfsdfsdfsdfsdfskskdbfkmsbdkbksbflkbsdkfbksjdfklbsdkfjbskdbfkjsbdfkjskdjfbksjbdfkjsdfndo");
    return response.map(item => new Vehicle(
      item.id!,
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

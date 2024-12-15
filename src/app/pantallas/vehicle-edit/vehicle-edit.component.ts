import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VehicleService} from "../../service/vehicle.service";
import {Vehicle} from "../../models/Vehicle";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {Brand} from "../../models/Brand";
import {BrandServiceService} from "../../service/brand-service.service";
import {NgForOf} from "@angular/common";
import {NavarComponent} from "../../component/navar/navar.component";

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonicModule,
    NgForOf,
    NavarComponent
  ]
})
export class VehicleEditComponent  implements OnInit {
  vehicle:Vehicle = new Vehicle(-1, "", new Date(), 0, "", "", "");
  brands:Brand[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService:VehicleService,
    private brandService:BrandServiceService

  ) { }

  ngOnInit() {
    if (this.vehicle.id === -1) {
      this.vehicle.id = undefined;
    }
    const vehicleId = this.route.snapshot.paramMap.get('id');
    console.log(vehicleId);
    if (vehicleId) {
    this.vehicleService.getVehicleById(vehicleId).subscribe(vehicle => {
      console.log(vehicle);
      this.vehicle = vehicle;
    });
    }
    this.brandService.getBrands().subscribe(brands => {
      this.brands = brands;
    });
  }

  onSubmit() {
    this.vehicleService.updateVehicle(this.vehicle).subscribe(() => {
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/vehicle-administration/']).then(r => console.log(r));
    });
  }
}

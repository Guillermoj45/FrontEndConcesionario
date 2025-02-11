import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicle} from "../models/Vehicle";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('api/vehicle');
  }

  getVehicleByBrand(idBrand: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`api/vehicle/brand/${idBrand}`);
  }

  getVehicleByModel(modelNane: any) {
    return this.http.get<Vehicle[]>(`api/vehicle/model/${modelNane}`);
  }

  getVehicleByModelAndBrand(modelName: string, numberBrand: number) {
    return this.http.get<Vehicle[]>(`api/vehicle/model/${modelName}/brand/${numberBrand}`);
  }

  updateVehicle(vehicle: Vehicle) {
    console.log(vehicle);
    return this.http.put<Vehicle>(`api/vehicle`, vehicle);
  }

  getVehicleById(vehicleId: string) {
    return this.http.get<Vehicle>(`api/vehicle/${vehicleId}`);
  }

  deleteVehicle(vehicle: Vehicle) {
    return this.http.delete(`api/vehicle/${vehicle.id}`);
  }
}

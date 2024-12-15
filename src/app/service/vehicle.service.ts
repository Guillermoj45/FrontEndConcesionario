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

}

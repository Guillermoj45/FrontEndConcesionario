import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brand} from "../models/Brand";

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

  constructor(private http:HttpClient) { }

  getBrands():Observable<Brand[]>{
    return this.http.get<Brand[]>('api/brand');
  }
}

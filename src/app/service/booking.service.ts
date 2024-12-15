import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Booking} from "../models/Booking";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  getBookings() {
    return this.http.get<Booking[]>('/api/booking')
  }
}

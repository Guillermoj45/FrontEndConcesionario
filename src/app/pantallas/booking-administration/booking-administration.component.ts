import {Component, OnInit} from '@angular/core';
import {NavarComponent} from "../../component/navar/navar.component";
import {IonContent, IonTitle} from "@ionic/angular/standalone";
import {
  TajetaVehiculoAdministrationComponent
} from "../../component/tajeta-vehiculo-administration/tajeta-vehiculo-administration.component";
import {BookingService} from "../../service/booking.service";
import {Booking} from "../../models/Booking";
import {NgForOf} from "@angular/common";
import {User} from "../../models/User";
import {Vehicle} from "../../models/Vehicle";
import {TarjetaCocheComponent} from "../../component/tarjeta-coche/tarjeta-coche.component";

@Component({
  selector: 'app-booking-administration',
  templateUrl: './booking-administration.component.html',
  styleUrls: ['./booking-administration.component.scss'],
  imports: [
    NavarComponent,
    IonTitle,
    TajetaVehiculoAdministrationComponent,
    NgForOf,
    IonContent,
    TarjetaCocheComponent
  ],
  standalone: true
})
export class BookingAdministrationComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.bookingService.getBookings().subscribe({
      next: (data) => {

        this.bookings = data.map((item: any) => new Booking(
          item.id,
          new Date(item.dateBooking),
          new Date(item.dateDelivery),
          new User(item.user.id, item.user.username, item.user.email),
          new Vehicle(
            item.vehicle.id,
            item.vehicle.model,
            new Date(item.vehicle.year),
            item.vehicle.price,
            item.vehicle.image,
            item.vehicle.brand,
            item.vehicle.status
          )
        ));

        console.log('Data received:', this.bookings);
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  protected readonly Booking = Booking;
}

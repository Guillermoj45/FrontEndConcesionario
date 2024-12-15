import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Vehicle} from "../../models/Vehicle";
import {VehicleService} from "../../service/vehicle.service";
import {BookingService} from "../../service/booking.service";

@Component({
  selector: 'app-tarjeta-coche',
  templateUrl: './tarjeta-coche.component.html',
  styleUrls: ['./tarjeta-coche.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class TarjetaCocheComponent implements OnInit {
  @Input() vehicle: Vehicle = new Vehicle(0, "SEAT", new Date(), 0, "https://storage.googleapis.com/pod_public/1300/173321.jpg", "Ibiza", "");
  public alertButtons = [{ text: 'OK', handler: (data:any) => this.onRent(data) }];
  public alertInputs = [
    {
      type: 'date',
    },
    {
      type: 'date',
    },
  ];
  constructor(
    private bookingService: BookingService
  ) {
  }

  ngOnInit() {
  }

  onRent(data: any) {
    console.log(data);
    let booking = {
      vehicleId: this.vehicle.id,
      dateBooking: data[0],
      dateDelivery: data[1]
    }
    this.bookingService.postBooking(booking).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }
}

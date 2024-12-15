import {AfterViewInit, Component, Input, OnInit, Query} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Vehicle} from "../../models/Vehicle";
import {Booking} from "../../models/Booking";
import {BookingService} from "../../service/booking.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-tajeta-vehiculo-administration',
  templateUrl: './tajeta-vehiculo-administration.component.html',
  styleUrls: ['./tajeta-vehiculo-administration.component.scss'],
  imports: [
    IonicModule,
    DatePipe
  ],
  standalone: true
})
export class TajetaVehiculoAdministrationComponent  implements OnInit, AfterViewInit {
  @Input() bookings!: Booking;
  idStatus!: string;
  status!:HTMLElement | null;

  constructor() {

  }

  ngOnInit() {
    this.idStatus = `booking${ this.bookings.id }`;
  }

  ngAfterViewInit() {
    this.status = document.getElementById(this.idStatus.toString());

    this.getStatusColor();
  }

  getStatusColor() {
    // quiero que dependiendo de la fecha de entrega cambie el color del status
    let date = new Date();
    let dateDelivery = new Date(this.bookings.dateDelivery);
    let dateBooking = new Date(this.bookings.dateBooking);
    if (this.status && date < dateBooking) {
      this.status.style.color = 'blue';
      this.status.innerHTML = 'Pendiente';
    }
    if (this.status && date < dateDelivery && date > dateBooking) {
      this.status.style.color = 'green';
      this.status.innerHTML = 'En curso';
    }
    if (this.status && date > dateDelivery) {
      this.status.style.color = 'red';
      this.status.innerHTML = 'Finalizado';
    }
  }

}

import {User} from "./User";
import {Vehicle} from "./Vehicle";

export class Booking {
  id:number;
  dateBooking:Date;
  dateDelivery:Date;
  user:User;
  vehicle:Vehicle;

  constructor(id:number, dateBooking:Date, dateDelivery:Date, user:User, vehicle:Vehicle){
    this.id = id;
    this.dateBooking = dateBooking;
    this.dateDelivery = dateDelivery;
    this.user = user;
    this.vehicle = vehicle;
  }
}

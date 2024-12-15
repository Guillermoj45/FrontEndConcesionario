import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Vehicle} from "../../models/Vehicle";

@Component({
  selector: 'app-tarjeta-coche',
  templateUrl: './tarjeta-coche.component.html',
  styleUrls: ['./tarjeta-coche.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class TarjetaCocheComponent  implements OnInit {
  @Input() vehicle: Vehicle = new Vehicle(0, "SEAT", new Date(), 0,"https://storage.googleapis.com/pod_public/1300/173321.jpg", "Ibiza", "");

  constructor() { }

  ngOnInit() {}

}

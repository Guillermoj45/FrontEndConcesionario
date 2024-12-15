import { Component, OnInit } from '@angular/core';
import {NavarComponent} from "../../component/navar/navar.component";

@Component({
  selector: 'app-vehicle-administration',
  templateUrl: './vehicle-administration.component.html',
  styleUrls: ['./vehicle-administration.component.scss'],
  imports: [
    NavarComponent
  ],
  standalone: true
})
export class VehicleAdministrationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

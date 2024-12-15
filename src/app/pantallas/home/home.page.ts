import {Component, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonLabel,
  IonItem,
  IonButton, IonText
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavarComponent } from '../../component/navar/navar.component';
import { IonicModule } from '@ionic/angular';
import {TarjetaCocheComponent} from "../../component/tarjeta-coche/tarjeta-coche.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, FormsModule, IonInput, IonLabel, IonItem, IonButton, IonText, NavarComponent, IonicModule, TarjetaCocheComponent],
})
export class HomePage implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {

  }
}

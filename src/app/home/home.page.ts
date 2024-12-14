import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonLabel,
  IonItem,
  IonButton
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../service/Login.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonInput, IonLabel, IonItem, IonButton],
})
export class HomePage {
  username: string = "";
  password: string = "";
  constructor(private loginService:LoginService, private authService: AuthService) {}

  login() {
    this.loginService.login(this.username, this.password).subscribe((response) => {
      console.log(response);
      this.authService.setToken(response);
    });
  }
}

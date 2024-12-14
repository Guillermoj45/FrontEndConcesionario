import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonLabel,
  IonItem,
  IonButton, IonText
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../service/Login.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonInput, IonLabel, IonItem, IonButton, IonText],
})
export class HomePage {
  username: string = "";
  password: string = "";

  constructor(
    private loginService:LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.loginService.login(this.username, this.password).subscribe((response) => {
      console.log(response);
      this.authService.setToken(response);
      this.router.navigate(['/cuentas']);
    });
  }
}

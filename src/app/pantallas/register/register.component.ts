import {Component, OnInit} from '@angular/core';
import {IonButton, IonInput, IonItem, IonLabel, IonText, IonTitle} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {LoginService} from "../../service/Login.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonTitle,
    FormsModule,
    IonText
  ]
})
export class RegisterComponent implements OnInit {
  username: string = "";
  password: string = "";
  email: string = "";

  constructor(private loginService: LoginService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.loginService.register(this.username, this.email, this.password).subscribe((data) => {
      console.log(data);
      this.authService.setToken(data);
    });
  }
}

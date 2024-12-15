import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {UserService} from "../../service/user.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ]
})
export class NavarComponent  implements OnInit {
  username: string = "SinNombre";
  rol: string = "SinRol";

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
      this.getUserNameAndRole();
      this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.getUserNameAndRole();
          }
        });
      this.router.navigate([this.router.url]);
  }

  ngAfterViewInit() {
    this.getUserNameAndRole();
    this.router.navigate([this.router.url]);
  }


  getUserNameAndRole(){
    this.userService.getUser().subscribe({
      next: (user) => {
        // Código para manejar la respuesta válida
      this.username = user.username;
      this.rol = user.rol;
      console.log("Nombre de usuario:",user.username, "Rol:", user.rol);
      },
      error: (err) => {
        // Código para manejar la respuesta inválida
        if (err.status === 403){
          console.log("No autorizado");
          this.router.navigate(["/login"]);
        }

      },
      complete: () => {
        // Código para manejar la respuesta completa
      }
    });
  }
}

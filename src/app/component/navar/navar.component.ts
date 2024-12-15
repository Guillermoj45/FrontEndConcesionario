import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.scss'],
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class NavarComponent  implements OnInit {
  username: string = "SinNombre";

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getUserName();
  }


  getUserName(){
    this.userService.getUser().subscribe({
      next: (user) => {
        // Código para manejar la respuesta válida
      this.username = user.username;
      console.log("Nombre de usuario:",user.username);
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

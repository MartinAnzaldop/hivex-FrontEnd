// register.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    this.userService.registerUser(userData)
      .subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          // Puedes redirigir a una página de éxito o realizar otras acciones después del registro.
          this.router.navigate(['/success']);
        },
        (error) => {
          console.error('Error al enviar formulario:', error);
          // Puedes manejar el error y mostrar un mensaje al usuario.
        }
      );
  }
}

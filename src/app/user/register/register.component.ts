// register.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import { UserModule } from '../user.module';
@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserForm: FormGroup;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, 
    private fb: FormBuilder, private router: Router, private _productService: UserService) {
      this.UserForm=this.fb.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        email:['', Validators.required],
        password:['', Validators.required],

  }
  )
}


  ngOnInit() {}
  addUser(){
    const User: user  = {
     firstName: this.UserForm?.get('firstname')?.value,
     lastName: this.UserForm?.get('Lastname')?.value,
     email: this.UserForm?.get('email')?.value,
     password: this.UserForm?.get('password')?.value,

   }

    this.userService.addUser(User).subscribe(dato=>{
     this.router.navigate(['/home'])
   }, error=>{
    console.log(error);
    })
    }
  onSubmit() {

    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
    this.userService.addUser(userData)
      .subscribe(
        (response: any) => {

          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/success']);
        },
        (error) => {
          console.error('Error al enviar formulario:', error);

        }
      );
  }

}
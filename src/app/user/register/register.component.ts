// register.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import { UserModule } from '../user.module';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserForm: FormGroup;
  loading = false;


  constructor(private userService: UserService,
    private fb: FormBuilder, private router: Router, private _productService: UserService,
     private toastr: ToastrService,) {
    this.UserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmation: ['', [Validators.required, Validators.minLength(6)]]
    }
    )
  }


  ngOnInit() { }
  addUser() {
    this.loading = true;
    const User: user = {
      name: this.UserForm?.get('name')?.value,
      email: this.UserForm?.get('email')?.value,
      password: this.UserForm?.get('password')?.value,
      confirmation: this.UserForm?.get('confirmation')?.value
    }
     if (this.UserForm.get('password')?.value !== this.UserForm.get('confirmation')?.value) {
       this.toastr.error('Las contraseñas ingresadas deben ser las mismas', 'Error');
       this.loading = false;
      return;

    }

    this.userService.addUser(User).subscribe(dato => {
      this.loading = false;
      this.router.navigate(['/login'])
      this.toastr.info('check your email', 'check your email');
      console.log(User)
    }, error => {
      console.log(error);
    })
  }


}

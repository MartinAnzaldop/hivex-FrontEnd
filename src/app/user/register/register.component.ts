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


  constructor(private userService: UserService,
    private fb: FormBuilder, private router: Router, private _productService: UserService) {
      this.UserForm=this.fb.group({
      name:['', Validators.required],

        email:['', Validators.required],
        password:['', Validators.required],

  } 
  )
}


  ngOnInit() {}
  addUser(){
    const User: user  = {
     name: this.UserForm?.get('name')?.value,

     email: this.UserForm?.get('email')?.value,
     password: this.UserForm?.get('password')?.value,

   }

    this.userService.addUser(User).subscribe(dato=>{
     this.router.navigate(['/home'])
     console.log(user)
   }, error=>{
    console.log(error);
    })
    }


}

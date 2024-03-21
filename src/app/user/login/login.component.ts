import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
emailEnviado: string='';
LoginForm: FormGroup;

constructor(private toastr: ToastrService,
  private fb: FormBuilder, private router: Router,) {
    this.LoginForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
   })
}
ngOnInit(): void {

}

  login(){
    const Login: Login  = {
      email: this.LoginForm.get('email')?.value,
      password: this.LoginForm.get('password')?.value,
      
    }

    this.emailEnviado=this.LoginForm.get('email')?.value,
    console.log('email forms'+this.emailEnviado);
    localStorage.setItem('email', JSON.stringify(this.emailEnviado));
    this.router.navigate(['/home'])
    console.log('email enviado'+this.emailEnviado);
    this.toastr.success('You have successfully logged in','Welcome! to Hivex');
  }



}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide=true
constructor (private _FormBuilder:FormBuilder , private _AuthService:AuthService ,private toastr: ToastrService , private _Router:Router) {}

loginForm:FormGroup = this._FormBuilder.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]],
})

login(){
  this._AuthService.signIn(this.loginForm.value).subscribe({
    next:(response)=>{console.log(response);
      this.toastr.success('Welcome Back');
      localStorage.setItem('userToken',response.token)
      this._AuthService.userData()
      this._Router.navigate(['/home'])

    },
    error:(err)=>{console.log(err);
      this.toastr.error(err.error.msg);
    }
  })
}
}


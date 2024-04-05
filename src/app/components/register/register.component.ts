import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
constructor (private _FormBuilder:FormBuilder , private _AuthService:AuthService , private _Router:Router ,private toastr: ToastrService) {}
hide = true;
RegisterForm:FormGroup = this._FormBuilder.group({
  
  name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]],
  age:['',[Validators.required,Validators.min(18)]],
  phone:['',[Validators.required]]
 

})
register(){
 
  this._AuthService.Register(this.RegisterForm.value).subscribe({
    next:(response)=>{console.log(response);
      this.toastr.success('Welcome to our Family');
      this._Router.navigate(['/login'])

    },
    error:(err)=>{console.log(err);
      this.toastr.error(err.error.msg);
    }
  })
}
}

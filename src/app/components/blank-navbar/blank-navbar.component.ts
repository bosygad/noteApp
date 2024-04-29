import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank-navbar',
  templateUrl: './blank-navbar.component.html',
  styleUrls: ['./blank-navbar.component.scss']
})
export class BlankNavbarComponent {
constructor(private _Router:Router){}

logOut(){
  localStorage.removeItem('userToken')
  this._Router.navigate(['./register'])
}
}

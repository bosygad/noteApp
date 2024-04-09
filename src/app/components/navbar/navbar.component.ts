import { Component } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuName:string="login"
constructor(private _Router:Router) {
  this._Router.events.subscribe({
    next:(result)=>{ 
      // console.log(result);
      if(result instanceof NavigationEnd){
        // console.log(result.url);
        this.menuName = result.url.replace("/"," ")
        
      }
    }
  })
}
}

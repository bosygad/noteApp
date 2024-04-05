import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Notes } from '../interfaces/notes';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:BehaviorSubject<any>= new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
    this.userData();
  }

  Register(form:Notes):Observable<any>{
    return this._HttpClient.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,form)
  }

  signIn(form:Notes):Observable<any>{
    return this._HttpClient.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,form)
  }

  userData(){
    const token = localStorage.getItem('userToken')
    if(token != null){
      const userData = jwtDecode(token)
      this.user.next(userData)
      this._Router.navigate(['/home'])
    }
  }
}

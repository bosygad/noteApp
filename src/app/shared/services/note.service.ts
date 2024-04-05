import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notes } from '../interfaces/notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
token:string ='';
  constructor(private _HttpClient:HttpClient) {
   if(localStorage.getItem('userToken') != null){
    this.token = `3b8ny__${localStorage.getItem('userToken')}`
   }
   }

  addNotes(form:Notes):Observable<any>{
    const headers = new HttpHeaders({
      token:this.token
    })
    const options = {headers:headers}
   return this._HttpClient.post(`https://note-sigma-black.vercel.app/api/v1/notes`,form , options)
  }

  getNotes():Observable<any>{
    const headers = new HttpHeaders({
      token:this.token
    })
    const options = {headers:headers}
    return this._HttpClient.get(`https://note-sigma-black.vercel.app/api/v1/notes`,options)
  }

  deleteNotes(NoteId:any):Observable<any>{
    const headers = new HttpHeaders({
      token:this.token
    })
    const options = {headers:headers}
    return this._HttpClient.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${NoteId}`,options)
  }

  UpdateNotes(NoteId:any , form:any):Observable<any>{
    const headers = new HttpHeaders({
      token:this.token
    })
    const options = {headers:headers}
    return this._HttpClient.put(`https://note-sigma-black.vercel.app/api/v1/notes/${NoteId}`,form,options)
  }
}

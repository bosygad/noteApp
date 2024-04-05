import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/layout/blank-layout/blank-layout.component';
import { SearchPipe } from './shared/pipe/search.pipe';
import { MaterialModule } from './material-module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {  } from "./material-module/material.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { NotesComponent } from './components/notes/notes.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {  CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderInterceptor } from './shared/interceptor/loader.interceptor';
import { BlankNavbarComponent } from './components/blank-navbar/blank-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavbarComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    SearchPipe,
    NotesComponent,
    BlankNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot()
    ,SweetAlert2Module.forRoot(),
    NgxSpinnerModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlankLayoutComponent } from './components/layout/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {path:"" , component:AuthLayoutComponent,children:[
    {path:"" , redirectTo:'login' , pathMatch:"full"},
    {path:"login",component:LoginComponent,title:'login'},
    {path:"register",component:RegisterComponent,title:"Resgister"}
  ]},
  {path:"" ,component:BlankLayoutComponent,canActivate:[authGuard],children:[
    {path:'' ,redirectTo:"home",pathMatch:"full" },
    {path:"home",component:HomeComponent,title:"Home"}
  ]},
  {path:"**",component:NotFoundComponent , title:"Not Found"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

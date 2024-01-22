import { RegistrerPageComponent } from './pages/registrer-page/registrer-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children:[
      {path:'login', component:LoginPageComponent},
      {path:'register', component:RegistrerPageComponent},
      {path:'**', redirectTo: 'login'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

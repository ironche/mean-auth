import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoute } from './auth-route.enum';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AuthRoute.LOGIN
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: AuthRoute.LOGIN,
        component: LoginPageComponent
      },
      {
        path: AuthRoute.REGISTER,
        component: RegisterPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

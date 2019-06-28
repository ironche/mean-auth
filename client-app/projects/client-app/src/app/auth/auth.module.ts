import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [MainLayoutComponent, LoginPageComponent, RegisterPageComponent],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

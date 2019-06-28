import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@NgModule({
  declarations: [MainLayoutComponent, WelcomePageComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }

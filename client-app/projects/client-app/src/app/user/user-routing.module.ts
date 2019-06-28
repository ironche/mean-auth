import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRoute } from './user-route.enum';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: UserRoute.WELCOME
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: UserRoute.WELCOME,
        component: WelcomePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

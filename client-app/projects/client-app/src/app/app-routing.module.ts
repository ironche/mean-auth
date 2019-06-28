import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoute } from './auth/auth-route.enum';
import { UserRoute } from './user/user-route.enum';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: UserRoute.BASE
  },
  {
    path: AuthRoute.BASE,
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: UserRoute.BASE,
    canActivate: [AuthGuard],
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

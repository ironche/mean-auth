import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthRoute } from '../../auth/auth-route.enum';
import { AuthStoreService } from '../services/auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authStoreService: AuthStoreService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authStoreService.getUser()) {
      return true;
    }

    this.router.navigate([`/${AuthRoute.BASE}/${AuthRoute.LOGIN}`]);
    return false;
  }
}

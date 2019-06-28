import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRoute } from '../../../auth/auth-route.enum';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthStoreService } from '../../../shared/services/auth-store.service';

@Component({
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private authStoreService: AuthStoreService
  ) { }

  logout(): void {
    this.authService
      .logout()
      .subscribe(() => {
        this.authStoreService.removeUser();
        this.router.navigate([`/${AuthRoute.BASE}/${AuthRoute.LOGIN}`]);
      });
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthRoute } from '../../auth/auth-route.enum';
import { AuthStoreService } from '../services/auth-store.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authStoreService: AuthStoreService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          this.authStoreService.removeUser();
          this.router.navigate([`/${AuthRoute.BASE}/${AuthRoute.LOGIN}`]);
        }
        return throwError(error);
      })
    );
  }
}

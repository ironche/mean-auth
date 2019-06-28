import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly api = {
    register: '/api/auth/register',
    login: '/api/auth/login',
    logout: '/api/auth/logout'
  };

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<any> {
    return this.http.post(this.api.register, { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.api.login, { username, password });
  }

  logout(): Observable<any> {
    return this.http.get(this.api.logout);
  }
}

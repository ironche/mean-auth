import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly api = {
    welcome: '/api/user/welcome',
    update: '/api/user/update'
  };

  constructor(private http: HttpClient) { }

  welcome(): Observable<any> {
    return this.http.get(this.api.welcome);
  }

  update(formValue: any): Observable<any>  {
    return this.http.post(this.api.update, formValue);
  }
}

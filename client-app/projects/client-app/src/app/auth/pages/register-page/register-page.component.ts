import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRoute } from '../../../user/user-route.enum';
import { AuthService } from '../../services/auth.service';
import { AuthStoreService } from '../../../shared/services/auth-store.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/[a-zA-Z0-9\$\!]{8,32}/)
    ])
  });
  hidePassword = true;

  constructor(
    private authService: AuthService,
    private authStoreService: AuthStoreService,
    private router: Router
  ) { }

  getError(control: AbstractControl): string {
    if (control.errors) {
      const error = Object.keys(control.errors)[0];
      switch (error) {
        case 'required':
          return 'ERROR.REQUIRED';
        case 'email':
          return 'ERROR.EMAIL';
        case 'pattern':
          return 'ERROR.PATTERN';
        default:
          return 'ERROR.UNKNOWN';
          break;
      }
    }
    return null;
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    if (this.form.value) {
      const username = this.form.get('username');
      const password = this.form.get('password');

      this.authService
        .register(username.value, password.value)
        .subscribe(
          () => {
            this.authService.login(username.value, password.value)
              .subscribe(() => {
                this.authStoreService.setUser(username.value);
                this.router.navigate([`/${UserRoute.BASE}/${UserRoute.WELCOME}`]);
              });
          },
          (error: any) => {
            username.setErrors({ error });
          }
        );
    }
  }
}

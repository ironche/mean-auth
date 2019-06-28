import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  readonly groups = ['Family', 'Friends', 'Colleagues'];
  username: string;
  userData: any;
  form = new FormGroup({
    displayName: new FormControl(''),
    fullName: new FormControl(''),
    phone: new FormControl(''),
    group: new FormControl('')
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.welcome()
      .subscribe((result: any) => {
        this.username = result.username;
        this.userData = result;
      });
  }

  onSubmit(): void {
    if (this.form.value) {
      this.userService
        .update(this.form.value)
        .subscribe((result: any) => {
          this.userData = result;
        });
    }
  }
}

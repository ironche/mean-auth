import { Component } from '@angular/core';
import { AuthRoute } from '../../auth-route.enum';

@Component({
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  readonly LINK = AuthRoute;
}

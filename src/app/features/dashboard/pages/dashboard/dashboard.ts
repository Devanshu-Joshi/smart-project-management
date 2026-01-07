import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AuthRoutingModule } from "../../../auth/auth-routing-module";
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, AuthRoutingModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  constructor(private auth: AuthService) { }
  logout() {
    this.auth.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Auth } from '../../../core/services/auth';
import { Button } from 'primeng/button';
import { AuthRoutingModule } from "../../../features/auth/auth-routing-module";
import { RouterModule } from '@angular/router';
import { Theme } from '../../../core/services/theme';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-menubar',
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, Button, AuthRoutingModule, RouterModule, TooltipModule],
  templateUrl: './menubar.html',
  styleUrl: './menubar.scss',
})
export class Menubar implements OnInit {

  constructor(public authService: Auth, public themeService: Theme) { }

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],
      },
    ];
  }
}

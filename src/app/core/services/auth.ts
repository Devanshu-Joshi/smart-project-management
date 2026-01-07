import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isLoggedIn = signal<boolean>(false);
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  isDarkMode = signal<boolean>(false);

  toggleDarkMode() {
    const element = document.documentElement;
    if (element) {
      this.isDarkMode.set(!this.isDarkMode());
      element.classList.toggle('dark-mode');
    }
  }
}

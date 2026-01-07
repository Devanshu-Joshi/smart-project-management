import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, RouterModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() btnText: string = 'Check';
}

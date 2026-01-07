import { Component } from '@angular/core';
import { Menubar } from '../../shared/components/menubar/menubar';

@Component({
  selector: 'app-header',
  imports: [Menubar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}

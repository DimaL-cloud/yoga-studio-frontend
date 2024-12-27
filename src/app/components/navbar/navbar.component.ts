import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {JoinUsComponent} from './join-us/join-us.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    JoinUsComponent
  ],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

}

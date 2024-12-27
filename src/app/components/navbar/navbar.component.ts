import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {JoinUsComponent} from './join-us/join-us.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    JoinUsComponent
  ],
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isModalVisible = false;
  isNavOpen = false; // Track mobile nav state

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}

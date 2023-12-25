import { Component } from '@angular/core';
import {NavbarService} from "../../services/navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  constructor(public navbarService: NavbarService) {
  }
}

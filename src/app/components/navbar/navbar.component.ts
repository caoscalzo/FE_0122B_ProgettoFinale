import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authSrv: AuthService) {}

  isLogged: any;

  ngOnInit(): void {
    this.isLogged = localStorage.getItem('utente');
  }

  Logout() {
    this.authSrv.logout();
  }
}

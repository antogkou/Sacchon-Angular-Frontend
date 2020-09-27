import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('account');
    console.log('user logged out');
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mySubscribe = Subscription;
  myData: User[];
  constructor(private router: Router, public userService: UserService) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }

  getUserInfo(): void {
      this.userService.getCurrentUserInfo().subscribe(
      (data) => (this.myData = data),
      (error) => console.log(error)
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('account');
    this.myData = null;
    localStorage.clear();
    console.log('user logged out');
    this.router.navigate(['']);
  }
}

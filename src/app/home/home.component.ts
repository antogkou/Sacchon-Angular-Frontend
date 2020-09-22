import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/user';
import { UserService } from '../user-account/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
   
  }
  users: User[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }

  // get data() {
  //   return this.loginForm.controls;
  // }

  // onLogout(){
  //   //debugger
  //   this.userService.login(this.data.email.value, this.data.password.value).subscribe(a => {
  //     this.router.navigate(['/home']);
  //   })
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('account');
    console.log('user logged out');
    this.router.navigate(['']);
  }
}
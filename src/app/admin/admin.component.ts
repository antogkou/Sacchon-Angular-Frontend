import { Component, OnInit } from '@angular/core';
import { User } from '../_shared/_models/user';
import { UserService } from '../_shared/_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  users: User[];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
      // response.map((item) => {
      //   this.users.push(item);
      // });
      console.log(this.users);
    });
  }
}

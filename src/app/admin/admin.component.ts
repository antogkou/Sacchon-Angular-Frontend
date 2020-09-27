import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }


}

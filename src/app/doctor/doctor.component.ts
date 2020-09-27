import { Component, OnInit } from '@angular/core';
import { User } from '../_shared/_models/user';
import { UserService } from '../_shared/_services/user.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  users: User[];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }
}

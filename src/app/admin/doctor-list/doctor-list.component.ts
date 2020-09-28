import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_shared/_models/user';
import { UserService } from 'src/app/_shared/_services/user.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  users: User[];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });
  }
}

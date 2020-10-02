import { Component, OnInit } from '@angular/core';
import { User } from '../_shared/_models/user';
import { UserService } from '../_shared/_services/user.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  users: User[];
  mytext = true;
  outletStatus = false;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }

  disableMyText(){
    this.mytext = false;
    this.outletStatus = true;
  }

  enableMyText(){
    this.outletStatus = false;
    this.mytext = true;
  }

}

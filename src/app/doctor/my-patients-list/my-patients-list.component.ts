import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_shared/_models/user';
import { UserService } from 'src/app/_shared/_services/user.service';

@Component({
  selector: 'app-my-patients-list',
  templateUrl: './my-patients-list.component.html',
  styleUrls: ['./my-patients-list.component.scss', '../doctor.component.scss'],
})
export class MyPatientsListComponent implements OnInit {
  url = 'http://localhost:9000/v1/team6/my-patients';

  firstName = [];
  lastName = [];
  phoneNumber = [];
  myData: any[] = [];
  users: User[];

  constructor(
    private userService: UserService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getDoctorPatients().subscribe((response) => {
      this.users = response;
      response.map((item) => {
        this.myData.push([item.firstName, item.lastName, item.phoneNumber]);
      });
      console.log(this.myData);
      console.log(this.users);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../_shared/_models/user';
import {UserService}  from '../../_shared/_services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-active-patients',
  templateUrl: './active-patients.component.html',
  styleUrls: ['./active-patients.component.scss']
})
export class ActivePatientsComponent implements OnInit {
  url = 'http://localhost:9000/v1/team6/sacchon/users-without-doctor'

  firstName = [];
  lastName = [];
  phoneNumber = [];
  myData: any[] = [];
  users: User[];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUsersWithoutDoctor().subscribe((response) => {
      this.users = response;
      response.map((item) =>{
        this.myData.push([item.firstName, item.lastName, item.phoneNumber]);
      });

      console.log(this.myData);
      console.log(this.users);
    });
  }

  // btnClick(){ 
  //   this.router.navigate(['/measurement']);
  // } 

}

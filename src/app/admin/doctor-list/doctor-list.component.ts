import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/_shared/_models/user';
import { UserService } from 'src/app/_shared/_services/user.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  page = 1;
  pageSize = 5;

  users: User[];
  inactiveDoctors: any[] = [];

  inactiveDateForm: FormGroup;
  showInactive = false;
  doctorList = true;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.inactiveDateForm = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl(),
    });

    this.getAllUsers();
    this.getInactiveDoctors();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });
  }

  getInactiveDoctors(): void {
    console.log(
      'start= ' + this.inactiveDateForm.get('startDate').value,
      'end= ' + this.inactiveDateForm.get('endDate').value
    );
    this.userService
      .getInactiveDoctors(
        this.inactiveDateForm.get('startDate').value,
        this.inactiveDateForm.get('endDate').value
      )
      .subscribe((response) => {
        this.inactiveDoctors = response;
        console.log(this.inactiveDoctors);
      });
  }

  showInactiveFunction(): void {
    this.showInactive = !this.showInactive;
    this.doctorList = !this.doctorList;
  }
}

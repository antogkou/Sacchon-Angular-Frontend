import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_shared/_models/user';
import { UserService } from 'src/app/_shared/_services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  page = 1;
  pageSize = 5;

  users: User[];
  inactiveDateForm: FormGroup;
  inactivePatients: any[] = [];

  showInactive = false;
  patientList = true;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.inactiveDateForm = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl(),
    });
    this.getAllUsers();
    this.getInactivePatients();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
      console.log('all users: ' + this.users);
    });
  }

  getInactivePatients(): void {
    console.log(
      'start= ' + this.inactiveDateForm.get('startDate').value,
      'end= ' + this.inactiveDateForm.get('endDate').value
    );
    this.userService
      .getInactivePatients(
        this.inactiveDateForm.get('startDate').value,
        this.inactiveDateForm.get('endDate').value
      )
      .subscribe((response) => {
        this.inactivePatients = response;
        console.log(this.inactivePatients);
      });
  }

  showInactiveFunction(): void {
    this.showInactive = !this.showInactive;
    this.patientList = !this.patientList;
  }
}

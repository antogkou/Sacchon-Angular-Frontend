import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_shared/_models/user';
import { UserService } from 'src/app/_shared/_services/user.service';

@Component({
  selector: 'app-patient-measurement',
  templateUrl: './patient-measurement.component.html',
  styleUrls: ['./patient-measurement.component.scss']
})
export class PatientMeasurementComponent implements OnInit {

  user: User;
  
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatient(this.route.snapshot.params.email);
    console.log('asdzxc');
  }

  getPatient(email: String): void {
    this.userService.getPatientData(email).subscribe((response) => {
      this.user = response;
      console.log(this.user);
    });
  }

}

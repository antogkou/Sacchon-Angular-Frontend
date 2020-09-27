import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_shared/_models/user';
import { UserService } from 'src/app/_shared/_services/user.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
})
export class PatientDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPatient(this.route.snapshot.params.email);
    console.log('got patient inside of patient-detail');
  }

  getPatient(email: string): void {
    this.userService.getPatientData(email).subscribe((response) => {
      this.user = response;
      console.log(this.user);
    });
  }
}

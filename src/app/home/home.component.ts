import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../_shared/_models/user';
import { UserService } from '../_shared/_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: User[];
 

  constructor(public userService: UserService, private router: Router) {
  
  }

  ngOnInit(): void {
   
    // this.userService.getUsers().subscribe((users) => {
    //   this.users = users;
    //   console.log(users);
    // });
  }

  goToPatient() {
    this.router.navigate(['patient']);
  }
  goToDoctor() {
    this.router.navigate(['doctor']);
  }
  goToAdmin() {
    this.router.navigate(['admin']);
  }
}

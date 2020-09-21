import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get data() {
    return this.loginForm.controls;
  }

  onSubmit(){
    //debugger
    this.userService.login(this.data.email.value, this.data.password.value).subscribe(a => {
      this.router.navigate(['/home']);
    })
  }
  // onSubmit() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   } else if (
  //     this.data.username.value == localStorage.getItem('username') &&
  //     this.data.password.value == localStorage.getItem('password')
  //   ) {
  //     this.router.navigate(['/home']);
  //   } else {
  //     this.submitted = true;
  //   }
  // }
}

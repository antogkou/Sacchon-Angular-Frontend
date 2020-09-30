import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../../_shared/_services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get data() {
    return this.loginForm.controls;
  }

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   this.loading = true;
  //   this.userService
  //     .login(this.data.email.value, this.data.password.value)
  //     .subscribe((a) => {
  //       this.router.navigate(['/home']);
  //     });
  // }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService
      .login(this.data.email.value, this.data.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.redirectUser(data.userRole);
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
  }

  redirectUser(userRole) {
    if (userRole == 'patient') {
      this.router.navigate(['/patient']);
    } else if (userRole == 'doctor') {
      this.router.navigate(['/doctor']);
    } else if (userRole == 'admin') {
      this.router.navigate(['/admin']);
    }
  }
}

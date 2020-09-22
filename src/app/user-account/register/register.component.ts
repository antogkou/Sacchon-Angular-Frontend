import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      userRole: ['', Validators.required],
      zipCode: ['', Validators.required],
      hasActiveDoctor: [1],
      isActive: [0],
      createdDate: []
    });
  }

  get data() {
    return this.registerForm.controls;
  }

  onRegister(){
    if (this.registerForm.invalid) {
      return;
    } else {
      this.userService.register(this.registerForm.value).subscribe(r => {
        this.router.navigate(['/login']);
      })
        this._snackBar.open('Register Successfully', 'Success', {
         duration: 2000,
          });
    }
  }

  // onSubmit() {
  //   if (this.registerForm.invalid) {
  //     return;
  //   } else {
  //     localStorage.setItem('firstname', this.data.firstname.value);
  //     localStorage.setItem('lastname', this.data.lastname.value);
  //     localStorage.setItem('username', this.data.email.value);
  //     localStorage.setItem('password', this.data.password.value);
  //     this._snackBar.open('Register Successfully', 'Success', {
  //       duration: 2000,
  //     });
  //     this.router.navigate(['/login']);
  //   }
  // }
}

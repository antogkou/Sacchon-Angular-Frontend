import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../../_shared/_services/user.service';

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
    this.initializeForm();
  }
  
  initializeForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      city: new FormControl('', [Validators.required, Validators.minLength(5)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(5)]),
      userRole: new FormControl('', [Validators.required, Validators.minLength(5)]),
      zipCode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }

  get data() {
    return this.registerForm.controls;
  }

  onRegister(){
    if (this.registerForm.invalid) {
      this._snackBar.open('Register failed!', 'Error', {
        duration: 2000,
         });
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

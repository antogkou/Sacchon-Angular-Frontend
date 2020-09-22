import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { User } from '../user-account/_models/user';
import { UserService } from '../user-account/user.service';

import { Chart } from 'chart.js';
// import { multi } from '../data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  // url = 'http://localhost:58617/API/Charts/GetCharts';
  // data: Data[];
  // Player = [];
  // Run = [];
  // Linechart = [];

  // Start of chart test
  // multi: any[];
  // view: any[] = [700, 300];

  // options
  // legend: boolean = true;
  // showLabels: boolean = true;
  // animations: boolean = true;
  // xAxis: boolean = true;
  // yAxis: boolean = true;
  // showYAxisLabel: boolean = true;
  // showXAxisLabel: boolean = true;
  // xAxisLabel: string = 'Year';
  // yAxisLabel: string = 'Population';
  // timeline: boolean = true;
  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']  };


    url = 'http://localhost:9000/v1/team6/sacchon/measurements';
    data: Data[];
    glucose_level = [];
    carb_intake = [];
    Linechart = [];

  // End of Chart Test

  constructor(private httpClient: HttpClient, public userService: UserService, private router: Router)  {
    // Object.assign(this, { multi });
  }
  users: User[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });

    this.httpClient.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.glucose_level.push(x.glucose_level);  
        this.carb_intake.push(x.carb_intake);  
      });  
      this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.glucose_level,  
          datasets: [  
            {  
              data: this.carb_intake,  
              borderColor: '#3cb371',  
              backgroundColor: "#0000FF",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  }  

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('account');
    console.log('user logged out');
    this.router.navigate(['']);
  }

  }

  // get data() {
  //   return this.loginForm.controls;
  // }  

  // onLogout(){
  //   //debugger
  //   this.userService.login(this.data.email.value, this.data.password.value).subscribe(a => {
  //     this.router.navigate(['/home']);
  //   })
  // }

  

  //charts start
  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }

  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }
  //charts end

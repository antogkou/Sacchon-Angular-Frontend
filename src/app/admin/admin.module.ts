import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }

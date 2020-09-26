import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';



@NgModule({
  declarations: [AdminComponent, AdminPanelComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

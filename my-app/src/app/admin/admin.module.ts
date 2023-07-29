import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';

console.log('admin module loaded');
@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminUserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

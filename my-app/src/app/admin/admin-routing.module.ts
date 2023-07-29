import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';

const routes: Routes = [
  // childe routing admin/login or admin/list can be used when we have same component in different modules
  // {
  //   path:'admin', 
  //   children: [
  //     {path:'login',component: AdminLoginComponent}, // childe routing admin/login
  //     {path:'list',component: AdminUserListComponent}
  //   ]  
  // }
  { path:'login',component: AdminLoginComponent},
  { path:'list',component: AdminUserListComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

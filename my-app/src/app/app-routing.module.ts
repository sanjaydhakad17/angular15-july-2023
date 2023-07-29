import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGridComponent } from './data-grid/data-grid.component';
import { Component } from 'ag-grid-community';
import { FallbackComponent } from './fallback/fallback/fallback.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserDetailsFormComponent } from './user/user-details-form/user-details-form.component';

const routes: Routes = [
  {
    path:'grid-view',
    component:DataGridComponent
  },
  // {
  //   path:'user-form/:id',
  //   component: UserDetailsFormComponent,
    
  // },
  {
    path:'user-details',
    component:UserDetailsComponent,
    children: [
      {
        path:'user-form/:id',
        component: UserDetailsFormComponent
      }
    ]
  },
  {
      path:'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
  // {
  //   path:"**",
  //   component: FallbackComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

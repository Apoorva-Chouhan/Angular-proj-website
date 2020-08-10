import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importing router module from angular
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

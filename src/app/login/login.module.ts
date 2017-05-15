import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MdButtonModule,MdInputModule } from '@angular/material';

import { loginRoutes } from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdInputModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

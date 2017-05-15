import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { homeRoutes } from './home.routes';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class HomeModule { }

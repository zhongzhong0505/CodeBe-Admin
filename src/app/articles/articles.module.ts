import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';

import { articlesRoutes } from './articles.routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(articlesRoutes)
  ],
  declarations: [ArticlesComponent]
})
export class ArticlesModule { }

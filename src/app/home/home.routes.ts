import { HomeComponent } from './home.component';

export const homeRoutes = [{
    path: '',
    component: HomeComponent,
    children:[{
        path:'articles',
        loadChildren:'../articles/articles.module#ArticlesModule'
    }]
}];
export const appRoutes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
}, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
}, {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
}, {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
}];
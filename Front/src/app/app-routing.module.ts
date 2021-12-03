import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components (to route) List
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';

import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { ViewComponent } from './components/account/view/view.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signin',
        component: SigninComponent,
    },
    {
        path: 'create-profile',
        component: CreateProfileComponent,
    },
    {
        path: 'account',
        component: AccountComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'view' },
            { path: 'view', component: ViewComponent },
            { path: 'profile', component: ProfileComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

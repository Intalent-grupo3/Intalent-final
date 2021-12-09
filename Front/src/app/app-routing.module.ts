import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components (to route) List
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LikesListComponent } from './components/in/likes-list/likes-list.component';
import { AccountComponent } from './components/in/in.component';
import { ProfileComponent } from './components/in/profile/profile.component';
import { ViewComponent } from './components/in/main/main.component';
import { LikesComponent } from './components/in/likes-list/likes/likes.component';
import { DislikesComponent } from './components/in/likes-list/dislikes/dislikes.component';
import { MatchesComponent } from './components/in/likes-list/matches/matches.component';
import { DetallePerfilComponent } from './components/in/likes-list/detalle-perfil/detalle-perfil.component';

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
        path: 'edit-profile',
        component: EditProfileComponent,
    },
    {
        path: 'likes-list',
        component: LikesListComponent,
        
    },
    {
        path: 'account',
        component: AccountComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'view' },
            { path: 'view', component: ViewComponent },
            { path: 'profile', component: ProfileComponent },
            {path: 'likes-list',component: LikesListComponent,children:[
                { path: '', pathMatch: 'full', redirectTo: 'likes' },
                { path: 'likes', component: LikesComponent },
                { path: 'dislikes', component: DislikesComponent },
                { path: 'matches', component: MatchesComponent },
            ]},
            {path:':id',component:DetallePerfilComponent}
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

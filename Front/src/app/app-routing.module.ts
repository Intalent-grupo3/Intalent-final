import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components (to route) List
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InComponent } from './components/in/in.component';

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
    path: 'main',
    component: InComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      // {
      //   path: 'contacts',
      //   component: ContactsComponent,
      // },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

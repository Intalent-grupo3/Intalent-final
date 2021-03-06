import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth/';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/in/profile/profile.component';
import { NavbarComponent } from './components/in/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountComponent } from './components/in/in.component';
import { ViewComponent } from './components/in/main/main.component';
import { LikesListComponent } from './components/in/likes-list/likes-list.component';
import { LikesComponent } from './components/in/likes-list/likes/likes.component';
import { DislikesComponent } from './components/in/likes-list/dislikes/dislikes.component';
import { MatchesComponent } from './components/in/likes-list/matches/matches.component';
import { DetallePerfilComponent } from './components/in/likes-list/detalle-perfil/detalle-perfil.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SigninComponent,
        ProfileComponent,
        NavbarComponent,
        CardComponent,
        CreateProfileComponent,
        EditProfileComponent,
        HeaderComponent,
        AccountComponent,
        ViewComponent,
        LikesListComponent,
        LikesComponent,
        DislikesComponent,
        MatchesComponent,
        DetallePerfilComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

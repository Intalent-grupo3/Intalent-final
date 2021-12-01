import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { InComponent } from './components/in/in.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SigninComponent,
        ProfileComponent,
        NavbarComponent,
        MainComponent,
        CardComponent,
        CreateProfileComponent,
        InComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

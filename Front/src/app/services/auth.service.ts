import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    userFirebase: string = '';
    constructor(private auth: AngularFireAuth) {
        auth.authState.subscribe((user) => {
            this.userFirebase = String(user?.uid);
            console.log(this.userFirebase);
        });
    }

    login(user: string, pass: string) {
        return this.auth.signInWithEmailAndPassword(user, pass);
    }
    registrar(user: string, pass: string) {
        return this.auth.createUserWithEmailAndPassword(user, pass);
    }
    logout() {
        return this.auth.signOut();
    }
}

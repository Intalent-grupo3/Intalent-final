import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    //submitValue = 'Entra';

    constructor(
        public auth: AuthService,
        public userFirebase: AuthService,
        public router: Router
    ) {}

    ngOnInit(): void {}

    async logIn(user: string, pass: string) {
        try {
            await this.auth.login(user, pass);
            console.log(this.auth);
            this.router.navigateByUrl('/account');
        } catch (e: any) {
            //alert(e.message);
            if (
                e.message ==
                'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).'
            ) {
                alert('El usuario que ha introducido no existe');
            } else if (
                e.message ==
                'Firebase: The email address is badly formatted. (auth/invalid-email).'
            ) {
                alert(
                    'El email que has introducido no tiene el formato ...@...'
                );
            } else if (
                e.message ==
                'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).'
            ) {
                alert(
                    'El email o la contraseña que ha introducido es incorrecta'
                );
            } else {
                alert(e.message);
            }
        }
    }
}

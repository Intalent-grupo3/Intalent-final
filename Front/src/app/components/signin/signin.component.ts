import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
    submitValue = 'Entra';

    constructor(public auth: AuthService,public userFirebase: AuthService, public router: Router,) {}

    ngOnInit(): void {}

    async registrar(user: string, pass: string) {
        try {
            await this.auth.registrar(user, pass);
            this.router.navigateByUrl('https://localhost:3000/index')}
            catch (e: any) {
                //alert(e.message);
                if (
                    e.message ==
                    'Firebase: The email address is badly formatted. (auth/invalid-email).'
                  ) {
                    alert('El email que has introducido debe tener el formato ...@...');
                  }
                  else if (
                    e.message ==
                    'Firebase: Password should be at least 6 characters (auth/weak-password).'
                  ) {
                    alert('Tu contraseña debe tener al menos 6 caracteres');
                  }
        }
    }
}

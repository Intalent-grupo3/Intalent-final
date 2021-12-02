import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
    submitValue = 'Entra';

    constructor(public auth: AuthService) {}

    ngOnInit(): void {}

    async registrar(user: string, pass: string) {
        try {
            await this.auth.registrar(user, pass);
            alert('Te has registrado');
        } catch (e: any) {
            alert(e.message);
        }
    }
}

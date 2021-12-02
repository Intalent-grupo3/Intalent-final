import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    submitValue = 'Entra';

    constructor(public auth: AuthService, public userFirebase: AuthService) {}

    ngOnInit(): void {}

    async login(user: string, pass: string) {
        try {
            await this.auth.login(user, pass);
            alert('Has Entrado');
        } catch (e: any) {
            alert(e.message);
        }
    }
}

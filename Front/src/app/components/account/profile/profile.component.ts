import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Persona } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CrudServicesService } from 'src/app/services/crud-services.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    loginId: any;
    persona: Persona = {} as Persona;
    constructor(
        private crudService: CrudServicesService,
        private router: Router,
        private ngZone: NgZone,
        public userFirebase: AuthService,
        public firebase: AngularFireAuth
    ) {
        this.loginId = getAuth().currentUser?.uid;
    }

    ngOnInit(): any {
        this.crudService.showuserprofile(this.loginId).subscribe((res) => {
            console.log(res);
            this.persona = res;
        });
    }
    delete() {
        console.log(this.loginId);
        if (window.confirm('Do you want to go ahead?')) {
            this.crudService.deleteUserProfile(this.loginId).subscribe({
                next: (any) => {
                    console.log('Perfil borrado correctamente');
                    this.ngZone.run(() => this.router.navigateByUrl('/login'));
                },
                error: (err) => {
                    console.log(err);
                },
            });
        }
    }
}

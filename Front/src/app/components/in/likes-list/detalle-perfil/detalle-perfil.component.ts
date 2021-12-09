import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Persona } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CrudServicesService } from 'src/app/services/crud-services.service';
import { ActivatedRoute } from '@angular/router';
import { AgeService } from 'src/app/services/age.service';

@Component({
    selector: 'detalle-perfil',
    templateUrl: './detalle-perfil.component.html',
    styleUrls: ['./detalle-perfil.component.scss'],
})
export class DetallePerfilComponent implements OnInit {
    loginId: any;
    persona: Persona = {} as Persona;
    time: any = new Date().getFullYear();
    age: any;
    dob: any;

    constructor(
        private crudService: CrudServicesService,
        private router: Router,
        private ngZone: NgZone,
        public userFirebase: AuthService,
        public firebase: AngularFireAuth,
        public route: ActivatedRoute,
        public AgeService: AgeService
    ) {
        this.route.paramMap.subscribe((params) => {
            this.loginId = params.get('id');
        });
        console.log(this.loginId);
    }

    ngOnInit(): any {
        this.crudService.showuserprofile(this.loginId).subscribe((res) => {
            console.log(res);
            this.persona = res;
            this.persona.age = this.AgeService.calcAge(this.persona.dob);
            if (!this.persona.image) {
                this.persona.image =
                    'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';
            }
        });
    }
}

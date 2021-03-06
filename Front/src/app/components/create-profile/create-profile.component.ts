import { Component, OnInit, NgZone } from '@angular/core';
import { CrudServicesService } from 'src/app/services/crud-services.service';
import { Router } from '@angular/router';
import { Persona } from '../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'app-create-profile',
    templateUrl: './create-profile.component.html',
    styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {
    public persona: Persona = {} as Persona;
    loginId: any;
    userId: any;
    topicsList = [
        'Naturaleza',
        'Ir de cañas',
        'Juegos de mesa',
        'Bailar',
        'Mascotas',
        'Picnic',
        'Idiomas',
    ];
    topics: Array<string> = [];
    test = [];
    dob: any;
    age: any;
    validate = [false, false, false, false, false, false];

    constructor(
        private crudService: CrudServicesService,
        private router: Router,
        private ngZone: NgZone,
        public userFirebase: AuthService,
        public firebase: AngularFireAuth
    ) {
        firebase.authState.subscribe((user) => {
            this.userId = String(user?.uid);
        });
    }

    // Recogide de información de los inputs
    logName(x: any) {
        this.persona.name = x.value;
        if (x.valid) {
            this.validate[0] = true;
        }
    }
    logAge(x: any) {
        this.persona.dob = x.value;
        if (x.valid) {
            this.validate[1] = true;
        }
    }
    logGender(x: any) {
        this.persona.gender = x.value;
        if (x.valid) {
            this.validate[2] = true;
        }
    }
    logCity(x: any) {
        this.persona.city = x.value;
        if (x.valid) {
            this.validate[3] = true;
        }
    }
    logCountry(x: any) {
        this.persona.country = x.value;
        if (x.valid) {
            this.validate[4] = true;
        }
    }
    logImage(event: any) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            this.persona.image = reader.result;
            console.log(this.persona.image);
        };
    }

    logTopic(x: any) {
        console.log('x.name', x.name);
        if (x.value) {
            this.topics.push(x.name);
        } else {
            this.topics.forEach((item, index) => {
                if (item === x.name) this.topics.splice(index, 1);
            });
        }
        this.persona.topics = this.topics;
        console.log(this.persona.topics);
    }
    logBio(x: any) {
        this.persona.bio = x.value;
        if (x.valid) {
            this.validate[5] = true;
        }
    }

    // Uso conjunto de los datos guardados en el objeto
    log(): any {
        for (let valid of this.validate) {
            if (valid != true) {
                console.log(this.validate);
                return 0;
            }
        }

        this.persona.loginId = this.userId;
        this.crudService.addnewuser(this.persona).subscribe({
            next: (any) => {
                console.log('Data added successfully!');
                this.ngZone.run(() => this.router.navigateByUrl('/account'));
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
    ngOnInit() {}
}

import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/user';
import { CrudServicesService } from 'src/app/services/crud-services.service';
import { getAuth } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProfileComponent } from '../in/profile/profile.component';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
    public persona: Persona = {} as Persona;
    loginId: any;
    userId: any;
    topicsList = [
        { name: 'Naturaleza', value: false },
        { name: 'Ir de cañas', value: false },
        { name: 'Juegos de mesa', value: false },
        { name: 'Bailar', value: false },
        { name: 'Mascotas', value: false },
        { name: 'Picnic', value: false },
        { name: 'Idiomas', value: 'false' },
    ];

    topics: Array<string> = [];
    test = [];
    dob: any;
    age: any;

    constructor(
        // private profile: ProfileComponent,
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
            this.dob = this.persona.dob;
            this.age = this.dob.split('T');
            this.persona.dob = this.age[0];
            this.topicsList.map((t) => {
                for (let topic of this.persona.topics) {
                    if (topic == t.name) {
                        t.value = 'true';
                    }
                }
            });
        });
    }

    // Recogide de información de los inputs
    checked(x: any) {
        console.log(x.value);
    }
    logName(x: any) {
        this.persona.name = x.value;
    }
    logAge(x: any) {
        this.persona.dob = x.value;
    }
    logGender(x: any) {
        this.persona.gender = x.value;
    }
    logCity(x: any) {
        this.persona.city = x.value;
    }
    logCountry(x: any) {
        this.persona.country = x.value;
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
        console.log('x.name', x.value);
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
    }

    // Uso conjunto de los datos guardados en el objeto
    log(): any {
        this.crudService
            .updateUserProfile(this.persona.loginId, this.persona)
            .subscribe({
                next: (any) => {
                    console.log('Data added successfully!');
                    this.ngZone.run(() =>
                        this.router.navigateByUrl('/account/profile')
                    );
                },
                error: (err) => {
                    console.log(err);
                },
            });
    }
}

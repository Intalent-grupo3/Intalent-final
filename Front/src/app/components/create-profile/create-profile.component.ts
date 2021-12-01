import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-create-profile',
    templateUrl: './create-profile.component.html',
    styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {
    user: User = {} as User;
    topicsList = [
        'Naturaleza',
        'Ir de cañas',
        'Juegos de mesa',
        'Bailar',
        'Mascotas',
        'Picnic',
        'Idiomas',
    ];

    constructor() {}

    // Recogide de información de los inputs
    logName(x: any) {
        this.user.name = x.value;
    }
    logAge(x: any) {
        this.user.age = x.value;
    }
    logGender(x: any) {
        this.user.gender = x.value;
    }
    logCity(x: any) {
        this.user.city = x.value;
    }
    logCountry(x: any) {
        this.user.country = x.value;
    }
    logTopic(x: any) {
        if (x.value) {
            this.user.topics.push(x.name);
        }
        console.log(this.user.topics);
    }
    logBio(x: any) {
        this.user.bio = x.value;
    }
    // Uso conjunto de los datos guardados en el objeto
    log() {
        console.log(this.user);
    }

    ngOnInit(): void {}
}

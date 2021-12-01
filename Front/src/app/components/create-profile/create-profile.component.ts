import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-create-profile',
    templateUrl: './create-profile.component.html',
    styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {
    user: User = {} as User;
    iot: number = -1;

    topicsList = [
        'Naturaleza',
        'Ir de cañas',
        'Juegos de mesa',
        'Bailar',
        'Mascotas',
        'Picnic',
        'Idiomas',
    ];
    test = [];

    constructor() {
        this.user.topics = [];
    }

    // Recogide de información de los inputs
    logName(x: any) {
        this.user.name = x.value;
    }
    logAge(x: any) {
        this.user.dob = x.value;
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
    logImage(event: any) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            this.user.image = reader.result;
            console.log(this.user.image);
        };
    }

    logTopic(x: any) {
        console.log('x.name', x.name);
        if (x.value) {
            this.user.topics.push(x.name);
        } else {
            this.iot = this.user.topics.indexOf(x.name);
            this.user.topics.splice(this.iot, 1);
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

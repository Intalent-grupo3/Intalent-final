import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-create-profile',
    templateUrl: './create-profile.component.html',
    styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {
    user: User = {} as User;

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
    logBio(x: any) {
        this.user.bio = x.value;
    }
    // Uso conjunto de los datos guardados en el objeto
    log() {
        console.log(this.user);
    }

    ngOnInit(): void {}
}

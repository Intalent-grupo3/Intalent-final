import { Component, OnInit, NgZone } from '@angular/core';
import { CrudServicesService } from 'src/app/services/crud-services.service';
import { Router } from '@angular/router';
import { Persona } from '../../models/user';

@Component({
    selector: 'app-create-profile',
    templateUrl: './create-profile.component.html',
    styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {
    public user: Persona = {} as Persona;
    loginId: any;
    topicsList = [
        'Naturaleza',
        'Ir de cañas',
        'Juegos de mesa',
        'Bailar',
        'Mascotas',
        'Picnic',
        'Idiomas',
    ];

    constructor(
        private crudService: CrudServicesService,
        private router: Router,
        private ngZone: NgZone
    ) {
        this.loginId; //=parámetro que pasa Yelder
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
    log(): any {
        this.user.loginId = this.loginId;
        console.log(this.user);
        this.crudService.addnewuser(this.user).subscribe({
            next: (any) => {
                console.log('Data added successfully!');
                this.ngZone.run(() => this.router.navigateByUrl('/main'));
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
    ngOnInit() {}
}

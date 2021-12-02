import { Component, OnInit,NgZone } from '@angular/core';
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
    persona: Persona = {} as Persona;
    loginId: any;
    userId:any;
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
    logTopic(x: any) {
        if (x.value) {
            this.persona.topics.push(x.name);
        }
        console.log(this.persona.topics);
    }
    logBio(x: any) {
        this.persona.bio = x.value;
    }
    
    // Uso conjunto de los datos guardados en el objeto
    log():any {
        this.persona.loginId=this.userId;
        this.crudService.addnewuser(this.persona)
        .subscribe({next:(any)=>{
            console.log('Data added successfully!')
            this.ngZone.run(() => this.router.navigateByUrl('/main'))}
          , error:(err)=>{
            console.log(err);}
      })
      console.log(this.persona);
    }
    
    ngOnInit() { }


}
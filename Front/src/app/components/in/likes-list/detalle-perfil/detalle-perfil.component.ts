import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Persona } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CrudServicesService } from 'src/app/services/crud-services.service';
import { ActivatedRoute } from "@angular/router";

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

    constructor(
        private crudService: CrudServicesService,
        private router: Router,
        private ngZone: NgZone,
        public userFirebase: AuthService,
        public firebase: AngularFireAuth,
        public route: ActivatedRoute
    ) {
      this.route.paramMap.subscribe(params => {
        this.loginId = params.get("id")
        
      })
      console.log(this.loginId)
        if (!this.persona.image) {
            this.persona.image =
                'https://lh3.googleusercontent.com/proxy/8ldb6d9R-HhV0MAqc1LMdgh3PvbEw7OfKKVALifpgcuZr-QMkxnvpQgqNDp7pBRvwqIGPrRdXZxuX13oom81XftrN-eNfbAzFvJ14lRDt4F5pGv4rZI9mbMsUf8TbgCcTARPE74keFeh7GIDnmWxESw';
        }
    }

    ngOnInit(): any {
        this.crudService.showuserprofile(this.loginId).subscribe((res) => {
            console.log(res);
            this.persona = res;
        });
    }
}

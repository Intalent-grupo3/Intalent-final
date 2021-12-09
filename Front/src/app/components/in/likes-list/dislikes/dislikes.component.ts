import { Component,NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Persona } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CrudServicesService } from 'src/app/services/crud-services.service';
@Component({
  selector: 'app-dislikes',
  templateUrl: './dislikes.component.html',
  styleUrls: ['./dislikes.component.scss']
})
export class DislikesComponent implements OnInit {
  loginId: any;
  persona: Persona = {} as Persona;
  likes:any ;
  nombre:any;
  users:any;
  person:any;
  constructor(private crudService: CrudServicesService,
    private router: Router,
    private ngZone: NgZone,
    public userFirebase: AuthService,
    public firebase: AngularFireAuth) {
      this.loginId = getAuth().currentUser?.uid;
        if (!this.persona.image) {
            this.persona.image =
                'https://lh3.googleusercontent.com/proxy/8ldb6d9R-HhV0MAqc1LMdgh3PvbEw7OfKKVALifpgcuZr-QMkxnvpQgqNDp7pBRvwqIGPrRdXZxuX13oom81XftrN-eNfbAzFvJ14lRDt4F5pGv4rZI9mbMsUf8TbgCcTARPE74keFeh7GIDnmWxESw';
        }
     }

ngOnInit(): void {
this.person=this.crudService.showuserprofile(this.loginId).subscribe((res) => {
console.log(res);
this.persona = res;
this.llamadaUser(this.persona.dislikes);
});


}
async llamadaUser(dislikes){

await dislikes;
console.log(dislikes)
this.users=[];
for (const dislike of dislikes) {
this.crudService.showuserprofile(dislike).subscribe((res)=>{this.users.push(res)
})

}
console.log(this.users);
}

userDetails(userId:any){
this.router.navigate(['/account',userId])

}
}



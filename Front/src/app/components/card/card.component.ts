import { Component, OnInit, Input, NgZone } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { CrudServicesService } from 'src/app/services/crud-services.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subject } from 'rxjs';
import { Persona } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";



@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    animations: [
        trigger('cardAnimator', [
            transition(
                '* => swiperight',
                animate(750, keyframes(kf.swiperight))
            ),
            transition('* => swipeleft', animate(750, keyframes(kf.swipeleft))),
        ]),
    ],
})
export class CardComponent {
  users: Persona = {} as Persona;
  loginId: any;
  userId: any;
  auth=getAuth();
  public index = 0;
  state:any;
  @Input()
  parentSubject!: Subject<any>;



  animationState!: string;
  constructor(
    private crudService: CrudServicesService,
    private router: Router,
    private ngZone: NgZone,
    public userFirebase: AuthService,
    public firebase: AngularFireAuth,
    
    ) {
        this.loginId=getAuth().currentUser?.uid;
      console.log('le llega este id para generar la persona aleatoria'+this.loginId);
        crudService.getRandomUser(this.loginId).subscribe(res => {
          console.log(res)
          this.users =res;
        });
        
      }
      

    ngOnInit() {
        this.parentSubject.subscribe((event) => {
            this.startAnimation(event);
        });
    }

    like(){
      console.log(this.users.loginId)
    }

  startAnimation(state:any) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state:any) {
    this.animationState = '';
    this.index++;
  }


  ngOnDestroy() {
    this.parentSubject.unsubscribe();
    // this.crudService.getRandomUser(this.loginId).subscribe(res => {
    //   console.log(res)
    //   this.users =res;
    // });
  }

}

import { Component, OnInit, Input, NgZone } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { CrudServicesService } from 'src/app/services/crud-services.service';

import { Subject } from 'rxjs';
import { Persona } from 'src/app/models/user';
import { Router } from '@angular/router';

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
  persona: Persona = {} as Persona;
  loginId: any;
  public users: any;
  public index = 0;
  state:any;
  @Input()
  parentSubject!: Subject<any>;



  animationState!: string;
  constructor(
    private crudService: CrudServicesService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.loginId//hay que traerlo de yelder
    this.users=crudService.getRandomUser(this.loginId);
   }

    ngOnInit() {
        this.parentSubject.subscribe((event) => {
            this.startAnimation(event);
        });

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
    this.users=this.crudService.getRandomUser(this.loginId);
  }

}

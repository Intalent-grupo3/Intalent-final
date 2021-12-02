import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/user';
import { CrudServicesService } from 'src/app/services/crud-services.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  persona: Persona = {} as Persona;
  constructor(
    private crudService: CrudServicesService,
    private router: Router,
    private ngZone: NgZone) {
     }

  ngOnInit(): void {
  }
  
}

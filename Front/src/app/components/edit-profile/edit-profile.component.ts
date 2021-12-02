import { Component, NgZone, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Persona } from "src/app/models/user";
import { CrudServicesService } from "src/app/services/crud-services.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
})
export class EditProfileComponent implements OnInit {
  loginId: any;
  persona: Persona = {} as Persona;
  constructor(
    private crudService: CrudServicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.loginId; //=el loginId de Yelder
  }

  ngOnInit(): void {}
  onUpdate(): any {
    this.crudService.updateUserProfile(this.loginId, this.persona).subscribe({
      next: (any) => {
        console.log("Perfil actualizado correctamente");
        this.ngZone.run(() => this.router.navigateByUrl("/profile"));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

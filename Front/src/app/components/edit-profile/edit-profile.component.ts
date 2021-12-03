import { Component, NgZone, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Persona } from "src/app/models/user";
import { CrudServicesService } from "src/app/services/crud-services.service";
import { AuthService } from "src/app/services/auth.service";

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
    private router: Router,
    private ngZone: NgZone,
    public userFirebase: AuthService
    ) {
        this.loginId=userFirebase.userFirebase
  }

  ngOnInit(): void {}
  updateProfile(): any {
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

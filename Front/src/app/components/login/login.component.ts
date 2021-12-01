import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitValue = 'Entra';

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  async login(user:string, pass:string){
    try {
      await this.auth.login(user,pass)
      alert("Has Entrado")
    } catch (e:any) {
      alert(e.message);
    }
    }
  
    async registrar(user:string, pass:string){
      try {
        await this.auth.registrar(user,pass)
        alert("Te has registrado")
      } catch (e:any) {
        alert(e.message);
      }
      }

}

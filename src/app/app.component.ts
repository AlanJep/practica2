import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: ['./app.component.scss'],
  providers : [
    UsuariosService
  ]
})
export class AppComponent {

  personas : any =[];

    constructor(private usuarioservice : UsuariosService){
      this.personas = usuarioservice.getUsuarios();
    }

}

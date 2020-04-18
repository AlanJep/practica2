import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: ['./app.component.scss']
})
export class AppComponent {

  personas : any =[];

    constructor(){
      let usuario = new UsuariosService();
      this.personas = usuario.getUsuarios();
    }

}

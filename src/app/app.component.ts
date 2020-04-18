import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

  miFormulario = new FormGroup({
    username: new FormControl('', Validators.required),
    userpassword: new FormControl('', Validators.required)
  });

}

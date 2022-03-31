import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public miformulario : FormGroup

  constructor(private fb: FormBuilder) {

    this.miformulario= this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.max(180)]],
      company: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]]

    });
  }

  enviar(){
    console.log("envia form", this.miformulario.value)
  }
}

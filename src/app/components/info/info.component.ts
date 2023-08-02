import { Component, Input, OnInit } from '@angular/core';
import { pj } from 'src/app/interfaces/pj';
import { SelectorService } from 'src/app/services/selector.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
   personajeSeleccionado: pj | null = null;
  constructor(private select:SelectorService){
    this.select.personajeSeleccionado$.subscribe(personaje => {
      if (personaje==null) this.personajeSeleccionado={Id:0}
      this.personajeSeleccionado = personaje;
    });
  }
 
}

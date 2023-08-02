import { Injectable } from '@angular/core';
import { pj } from '../interfaces/pj';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {
  private personajeSeleccionado: pj | null = null;
  private personajeSeleccionadoSource = new Subject<pj | null>();
  personajeSeleccionado$ = this.personajeSeleccionadoSource.asObservable();
  constructor() { }
  setPersonajeSeleccionado(personaje: pj | null) {
    this.personajeSeleccionado = personaje;
    this.personajeSeleccionadoSource.next(personaje); 
  }

  getPersonajeSeleccionado(): pj | null {
    return this.personajeSeleccionado;
  }
}

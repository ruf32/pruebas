import { Component, Input,Output } from '@angular/core';
import { cell } from 'src/app/interfaces/cell';
import {backs} from '../../constantes/backs'
import { front } from 'src/app/constantes/fronts';
import { pj } from 'src/app/interfaces/pj';
import { SelectorService } from 'src/app/services/selector.service';
@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent {
  fila :cell[]=[]
  tablero: cell[][] = []
 pj:pj[]=[]
 

   constructor(private select:SelectorService){
    if (!localStorage.getItem('tablero')) {this.Creartablero();}
   const tablerost=localStorage.getItem('tablero');
   if (tablerost){
    this.tablero=JSON.parse(tablerost)
    this.pj.push({Id:1,idpj:1,player:1,vel:10,mov:3,ata:10,def:3,pv:100});
   }
   
}
  getImagenPath(back: keyof typeof backs): string {
    return backs[back];
  }
  marcarCelda(fila: number, columna: number) {
  const celda=this.tablero[fila][columna];
  const personajeEnCelda = this.pj.find(p => p.Id === celda.id)||null ;
   this.select.setPersonajeSeleccionado(personajeEnCelda);
   
   
}
getPJImagePath(id: number): string {
  return front[`pj${id}` as keyof typeof front];
}
Creartablero():void{
 
for(let x=0;x<20;x++){
  for(let y=0;y<20;y++){
    var collision=false;
    var backe:keyof typeof backs='tierra';
    const backn=Math.random()*10;
   var front=0
   if (backn<=5) backe='tierra';
   if ((backn>5)&&(backn<=7)) backe='hierba'
   if ((backn>7)&&(backn<=8)) backe='agua';
   if ((backn>8)&&(backn<=9)){ backe='rock';collision=true};
  if ((backn>9)&&(backn<=10)) {backe='arbol';collision=true};
  if (!collision) front=0;
 
  this.fila.push({back:backe,id:0,collision:collision,opacity:0.7})
  }
  this.tablero.push(this.fila);
  this.fila=[];

}

localStorage.setItem('tablero',JSON.stringify(this.tablero))


}

}

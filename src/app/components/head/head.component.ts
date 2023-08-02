import { Component,NgModule } from '@angular/core';
import { pj } from 'src/app/interfaces/pj';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
pjs:pj[]=[{Id:1,idpj:1,player:1,vel:10,mov:3,ata:10,def:3,pv:100},{Id:1,idpj:1,player:1,vel:10,mov:3,ata:10,def:3,pv:100},{Id:1,idpj:1,player:1,vel:10,mov:3,ata:10,def:3,pv:100},{Id:1,idpj:1,player:1,vel:10,mov:3,ata:10,def:3,pv:100},{Id:1,idpj:1,player:1,vel:10,mov:3,ata:10,def:3,pv:100},{Id:1,idpj:1,player:1,vel:10,mov:3,ata:10,def:3,pv:100},]
msg:string='colocar tropas';
constructor(){
 
}

}

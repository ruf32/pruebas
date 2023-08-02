import { backs } from "../constantes/backs";

export interface cell{
    back:keyof typeof backs,
    id:number,
    collision?:boolean,
    opacity:number,
}
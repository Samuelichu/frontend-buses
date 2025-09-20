import type { Marca } from "./Marca"; 
export interface Bus {
    id: number;
    numBus: number;
    placa: string;
    fechaCreacion: string; 
    caracteristicas: string;
    marca: Marca;          
    estado: boolean;     
}
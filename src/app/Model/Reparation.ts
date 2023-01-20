import { TypeReparation } from "./TypeReparation";
import { Vehicule } from "./vehicule";

export class Reparation{
    _id!: string;
    avancement!: number;
    statusUneReparation!: boolean;
    typeReparationId!: any;
    vehiculeId!:any;
}
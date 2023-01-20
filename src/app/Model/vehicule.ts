import { Utilisateur } from "./Utilisateur";

export class Vehicule {
    _id!: string;
    nom!: string;
    type!: string;
    image!: string;
    immatriculation!: string;
    dateDebut!: Date;
    totalAvancement!: string;
    totalPrixReparation!: string;
    status!: string;
    utilisateurId!: any;
}

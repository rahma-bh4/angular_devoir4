import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Marque } from '../model/marque.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  voitures : Voiture[]; 
  marques!:Marque[];
constructor() { 
  this.marques=[{idMarque:1,nomMarque:"Renault"},
    {idMarque:2,nomMarque:"BMW"},
    {idMarque:3,nomMarque:"Audi"}];
  
this.voitures = [ 
  {idVoiture:1 , nomVoiture:"Renault clio 4 ", prixVoiture:45000.00, dateCreation : new Date("11/02/2016"),marque :{idMarque:1,nomMarque:"Renault"}},
  {idVoiture : 2,   nomVoiture : "BMW X5",  prixVoiture : 450000, dateCreation : new Date("12/17/2010"),marque:{idMarque:2, nomMarque:"BMW"}}, 
     {idVoiture : 3,   nomVoiture :"Audi Q5", prixVoiture : 100000, dateCreation : new Date("02/20/2020"),marque:{idMarque:3, nomMarque:"Audi"}}  
]; 
}
listeVoitures(): Voiture[]{
  return this.voitures; 
} 
ajouterVoiture( v: Voiture){ 
  this.voitures.push(v); 
} 
supprimerVoiture( v: Voiture){ 
   
   const index = this.voitures.indexOf(v, 0); 
   if (index > -1) { 
     this.voitures.splice(index, 1); 
   } 
}
voiture!:Voiture;
consulterVoiture(id:number): Voiture{     
  this.voiture =  this.voitures.find(v => v.idVoiture == id)!; 
  return this.voiture; 
  } 
  updateVoiture(v:Voiture) 
  { 
   // console.log(p); 
    this.supprimerVoiture(v); 
    this.ajouterVoiture(v); 
    this.trierVoitures(); 
  } 
  trierVoitures(){ 
    this.voitures = this.voitures.sort((n1,n2) => { 
      if (n1.idVoiture! > n2.idVoiture!) { 
          return 1; 
      } 
     if (n1.idVoiture! < n2.idVoiture!) { 
          return -1; 
      } 
    return 0; 
  }); 
  } 
  listeMarques():Marque[] {
    return this.marques;
    }
    consulterMarque(id:number): Marque{
      return this.marques.find(marque => marque.idMarque == id)!;
      }
       

}

function Dagomzet() {
 let omzet = 0;

 this.voegToeAanDagomzet = function (klantTotaal) {
     omzet = omzet + klantTotaal;
 }

}

function Winkelmand() {
 let totaalBedrag = 0;

 this.getTotaalBedrag = function () {
     return totaalBedrag;
 }

 this.vulWinkelmand = function (aantalSnoep, aantalChocola, aantalKoek) {

     let snoep = new Snoep(aantalSnoep);
     let chocola = new Chocola(aantalChocola);
     let koek = new Koek(aantalKoek);

     this.setWinkelmandBedrag(snoep, chocola, koek);
 }

 this.setWinkelmandBedrag = function (snoep, chocola, koek) {
     totaalBedrag = totaalBedrag + snoep.getTotaal();
 }
}

function Snoep(){

const prijs = 2.45;
const soort = ['original', 'Whole Hazelnoot', 'White whole hazalnuts'];
const zakinhoud = "500mg";
const merk = 'Ritter Sport';

 //dit weergeeft de prijs van het object Snoep
 this.getPrijs = function () {
 //return `De prijs is €${prijs},- `;
 return prijs;
 }

 //dit weergeeft alle namen die in de array zitten met de type / soort van de chocolade
 this.getAllChocoNames = function () {
 return soort;
 }
 
 //Hiermee wordt de soort / type van de chocolade geselecteerd, het nummer voer je in wanneer een NEW instantie wordt aangemaakt
  this.getSoortChoco = function (i) {
  return soort[i];
  }

 //dit weergeeft de Product naam
 this.getMerk = function () {
  return merk;
  }

 //dit weergeeft de inhoud in de miligram hoeveelheid
 this.getGewicht = function () {
 return zakinhoud;
 }

}


//Koppel de variabel snoep, aan het Object Snoep
let snoep = new Snoep();
console.log(snoep.getPrijs());


console.table(snoep.getMerk());

                              //0 || 1 || 2
console.log(snoep.getSoortChoco(0));


console.table(snoep.getAllChocoNames());


console.table(snoep.getGewicht());









/*
this.getMateriaal = function () {
return zakmateriaal;
}

this.getMerk = function () {
return merk;
 }
}

 this.berekenSnoepTotaal = function (aantal) {
   let totaalBedrag = 0;
     totaalBedrag =  prijs * aantal;
 }

 this.getTotaal = function () {
     return totaalBedrag;
 }

 this.berekenSnoepTotaal(aantal);
 
 */


 /*
function Koek(aantal) {
}

function Chocola(aantal) {
}
*/
/*
function Klant() {
 let winkelmand = new Winkelmand();

 this.wijzigAankopen = function (snoep, chocola, koek) {
    winkelmand.vulWinkelmand(snoep, chocola, koek);
 };

 this.teBetalen = function () {
     return winkelmand.getTotaalBedrag();
 }
}


let klant = new Klant();
klant.wijzigAankopen(20,1,1);
console.log('Totaalbedrag in winkelmand: ' + klant.teBetalen());

let dagomzet = new Dagomzet();
console.log('De totale dagomzet bedraagt: ' + 0 );
*/
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
const soort = ['Hazelnoot', 'original'];
const zakinhoud = "500mg";
//const zakmateriaal = "plastic";
//const merk = 'Ritter Sport';

 this.getPrijs = function () {
 return prijs;
 }

 this.getSoort = function () {
 return soort;
 }

 this.getInhoud = function () {
 return zakinhoud;
 }
}


let snoep = new Snoep();
console.log(snoep.getSoort());

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
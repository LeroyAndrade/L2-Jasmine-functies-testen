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


console.log(snoep.getAllChocoNames());


console.table(snoep.getGewicht());
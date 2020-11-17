describe('Snoep bedrag', function() {
    it('Snoep moet 2.45 kosten', function () {

        let snoep = new Snoep();
        snoep.getPrijs();

        expect(snoep.getPrijs()).toBe(2.45);
    });
});




describe('Naam van het merk', function() {
 it('De naam van het merk moet Ritter Sport zijn', function () {

     let snoep = new Snoep();
     snoep.getMerk();

     expect(snoep.getMerk()).toBe('Ritter Sport');
 });
});





describe('Alle snoep soorten van Chocolade', function() {
 it('Alle chocolade soorten van dit merk: original", "Whole Hazelnoot" en "White whole hazalnuts', function () {

     let snoep = new Snoep();
     snoep.getAllChocoNames();

     //expect(snoep.getAllChocoNames()).toEqual( ["original", "Whole Hazelnoot", "White whole hazalnuts"] ); //.
     
     //toBe weergeeft een error op het controleren van een "deep equality:
     //Jasmine console advies -> Tip: To check for deep equality, use .toEqual() instead of .toBe()."
     expect(snoep.getAllChocoNames()).toEqual( ["original", "Whole Hazelnoot", "White whole hazalnuts"] ); //.
 });
});



describe('Chocolade smaak 0', function() {
 it('De smaak van dit product is: original', function () {

     let snoep = new Snoep();
     snoep.getAllChocoNames();

     expect(snoep.getSoortChoco(0)).toBe( "original" );
 });
});

 describe('Chocolade smaak 1', function() {
  it('De smaak van dit product is: Whole Hazelnoot', function () {

      let snoep = new Snoep();
      snoep.getAllChocoNames();

      expect(snoep.getSoortChoco(1)).toBe( "Whole Hazelnoot" ); 
  });
 });

 describe('Chocolade smaak 2', function() {
  it('De smaak van dit product is: White whole hazalnuts', function () {
 
      let snoep = new Snoep();
      snoep.getAllChocoNames();
 
      expect(snoep.getSoortChoco(2)).toBe( "White whole hazalnuts" ); 
  });
 });
 

 describe('Gewicht van de chocolade', function() {
  it('Het gewicht van dit product is 500mg', function () {
 
      let snoep = new Snoep();
      snoep.getGewicht();
 
      expect(snoep.getGewicht()).toBe( "500mg" ); 
  });
 });
 






describe('Snoep bedrag', function() {
 it('Snoep moet 2.45 kosten', function () {

     let snoep = new Snoep();
     snoep.getPrijs();

     expect(snoep.getPrijs()).toBe(2.45);
 });
});




/*
describe('Snoep bedrag', function() {
 it('Snoep moet 2.45 kosten', function () {

     let snoep = new Snoep();
     snoep.getPrijs();

     expect(snoep.getPrijs()).toBe(2.45);
 });
});

*/
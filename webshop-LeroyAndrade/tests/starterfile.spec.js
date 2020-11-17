describe('Artikel test', function() {
    it('Snoep', function () {

        let snoep = new Snoep(1);
        snoep.berekenSnoepTotaal(1);

        expect(snoep.getTotaal()).toBe(2.45);
    });

});
//Hooks are from mocha 
/*
        order:
        1-before-> Executed once, as soon as the first TS is executed
        2-beforeEach-> Executed before EACH TS
        3- testExcetuion
        4- afterEach-> Executed after EACH TS
        5- after-> Executed once,as soon as the last TS
*/
//Skip --   -- Only


describe('Hook demo', function(){
    before(function(){
            cy.log('Before');
    });
    beforeEach(function(){
        cy.log('Before Each');

    });



    it('TC #1',function(){
        console.log('TC#1');

    });
    it('TC #2',function(){
        console.log('TC#2');

    });
    it.only('TC #3',function(){
        console.log('TC#3');

    });
    afterEach(function(){
        cy.log('after Each');
    });
    after(function (){
        cy.log('After');
    });
})

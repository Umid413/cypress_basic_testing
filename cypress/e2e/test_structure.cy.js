const { expect } = require("chai");
const { describe } = require("mocha");

let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;

//cypress test
//describe - context - > group test, nst multiply instances.

describe('Unit testing our dummy application', ()=>{

    context('Math with POSTIVE numbers', ()=>{
        //it or specify
        it('should add positive numbers', ()=>{
            expect(add(2,2)).to.eq(4);
        });
        it('should subtract positive numbers', ()=>{
            expect(subtract(4,2)).to.eq(2);
        });
        it('should divide positive numbers', ()=>{
            expect(divide(4,2)).to.eq(2);

        });
        it('should multiply positive numbers', ()=>{
            expect(multiply(4,2)).to.eq(8);

        });

    });
    describe('Math with DECIMAL numbers', ()=>{
        it('should add decimal numbers', ()=>{
            expect(add(2.2,2.2)).to.eq(4.4);
        });
        it('should subtract decimal numbers', ()=>{
            expect(subtract(4.4,2.2)).to.eq(2.2); 

        });

    });

});
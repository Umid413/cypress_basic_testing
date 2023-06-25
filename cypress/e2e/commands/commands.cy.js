///<reference types = "cypress"/>

describe('Commands Example', function () {

    beforeEach(function () {
        cy.visit('./');
    })
    it('Succces login test', function () {
        cy.typeLogin('standard_user','secret_sauce');
        cy.get('.title').should('contain.text','Products');
        
    })
    afterEach(function () {
        cy.logout();
        cy.url().should('eq','http://localhost:3000/');
    })

});
///<reference types = "cypress"/>

describe('Location demo', function () {

  let url = "http://localhost:3000/"

  beforeEach(function () {
    cy.visit('./');
  });


  it('Should have title tag with value Swag Labs', function () {
    cy.title().should('eq', 'Swag Labs');
  });

  it('URL should be equal to currentUrl', function () {
    cy.url().should('eq', url);
  });
  it('testetsetst', () => {
    cy.locationVerify("http:", "http://localhost:3000/", '/', '3000');
  })
  it.only('Host should eq to curretnHost', () => {
    cy.typeLogin('standard_user', 'secret_sauce');
    cy.locationVerify("http:", "http://localhost:3000/inventory.html", '/inventory.html', '3000');
  });


});

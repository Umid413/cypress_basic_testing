///<reference types="cypress"/>

import { describe } from 'mocha';
import sauceUsrs from '../../fixtures/sauceUsrs.json';

describe('Data Driven Test reading data from a JSON file', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000/');
  });

  sauceUsrs.forEach((test) => { // Use forEach on the array directly
    it(test.name, function () {
      cy.get('[data-test="username"]').type(test.username);
      cy.get('[data-test="password"]').type(test.password);
      cy.get('[data-test="login-button"]').click();

      if (test.name === 'Standart User') {
        cy.get('.title').should('contain.text', test.expected);
      } else {
        cy.get('[data-test="error"]').should('contain.text', test.expected);
      }
    });
  });
});

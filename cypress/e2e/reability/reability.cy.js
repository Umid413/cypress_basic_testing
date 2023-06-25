describe('Retry-Ability Session', function () {
    beforeEach(function () {
      cy.visit('https://example.cypress.io/todo');
  
      cy.get('.new-todo')
        .type('todo-A{enter}')
        .type('todo-B{enter}');
    });
  
    it('Should have two <li> elements', function () {
      cy.get('.todo-list li') // Update the selector to match the correct class or identifier of the <li> elements
        .should('have.length', 4); // Update the expected length to 2 since you added two items
    });
  });
  
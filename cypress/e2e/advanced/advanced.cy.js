describe('Sauce Demo', () => {
    beforeEach(() => {
      cy.visit('./')
    })
  
    it('should log in successfully', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.wait(500);
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.wait(500);
      cy.get('[data-test="login-button"]').click()
      cy.wait(500);
      // Assert the user is logged in
      cy.url().should('include', '/inventory.html')
      cy.wait(500);
      cy.get('.title').should('have.text', 'Products')
    })
  
    it('should add items to the cart', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.wait(500);
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.wait(500);
      cy.get('[data-test="login-button"]').click()
      cy.wait(500);
  
      // Add items to the cart
      cy.get('.inventory_item').each(($item, index) => {
        if (index < 3) {
            cy.wait(500);
          cy.wrap($item)
            .find('.btn_inventory')
            .click()
        }
      })
  
      // Verify the cart count
      cy.wait(500);
      cy.get('.shopping_cart_badge').should('have.text', '3')
    })
  
    it('should complete the checkout process', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.wait(500);
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.wait(500);
      cy.get('[data-test="login-button"]').click()
      cy.wait(500);
  
      // Add items to the cart
      cy.get('.inventory_item').each(($item, index) => {
        if (index < 3) {
            cy.wait(500);
          cy.wrap($item)
            .find('.btn_inventory')
            .click()
        }
      })
  
      // Go to the cart
      cy.wait(500);
      cy.get('.shopping_cart_link').click()
      cy.wait(500);
  
      // Click checkout
      cy.wait(500);
      cy.get('[data-test="checkout"]').click()
      cy.wait(500);
  
      // Fill out the checkout form
      cy.wait(500);
      cy.get('[data-test="firstName"]').type('John')
      cy.wait(500);
      cy.get('[data-test="lastName"]').type('Doe')
      cy.wait(500);
      cy.get('[data-test="postalCode"]').type('12345')
      cy.wait(500);
      cy.get('[data-test="continue"]').click()
      cy.wait(500);
  
      // Verify the order summary
      cy.get('.summary_subtotal_label').should('have.text', 'Item total: $55.97')
      cy.wait(500);
  
      // Finish the checkout
      cy.wait(500);
      cy.get('[data-test="finish"]').click()
      cy.wait(500);
      // Assert the order is complete
      cy.wait(500);
      cy.url().should('include', '/checkout-complete.html')
      cy.wait(500);
      cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
      cy.logout();
      cy.url().should('eq','http://localhost:3000/');
    })
  })
  
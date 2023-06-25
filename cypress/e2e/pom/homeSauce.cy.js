import homeSaucePage from "../pages/homeSaucePage";
import inventoryPage from "../pages/inventoryPage";

describe('POM implenmentation', () => {
    beforeEach(() => {
        cy.visit('./')
    });
    it('It should login inventory page', () => {
        homeSaucePage.typeUsrname('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickBtn();
        inventoryPage.elements.titleSpan().should('have.text', 'Products');
        inventoryPage.elements.loginOut();


    });


});
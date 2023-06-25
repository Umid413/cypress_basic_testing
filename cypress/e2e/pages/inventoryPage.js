///<reference types = "cypress"/>
class inventoryPage {
    elements = {
        titleSpan: () => cy.get('.title'),
        loginOut: () => cy.logout(),
    }


}
module.exports = new inventoryPage
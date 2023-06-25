///<reference types = "cypress"/>
class homeSaucePage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-tes="error"]')

    }
    typeUsrname(username) {
        this.elements.usernameInput().type(username)

    }
    typePassword(password) {
        this.elements.passwordInput().type(password)
    }
    clickBtn() {
        this.elements.loginBtn().click()
    }

}
module.exports = new homeSaucePage
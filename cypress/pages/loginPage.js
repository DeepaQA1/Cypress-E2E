export class loginPage{

    loginlocators= {

            onlocationOnid: '.btn',
            email: 'input[name="username"]:visible',
            password: 'input[name="password"]:visible',
            signin:'input[name="signInSubmitButton"]:visible'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    clickOnLocationOneID() {

        cy.get(this.loginlocators.onlocationOnid).click()

    }

    EnterEmail(UName) {

        cy.get(this.loginlocators.email).type(UName)
        
    }

    EnterPassword(PWord) {

        cy.get(this.loginlocators.password).type(PWord)
        
    }

    clickSignIn() {

        cy.get(this.loginlocators.signin).click()

    }


}
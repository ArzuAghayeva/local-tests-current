describe('Authentication', () => {

    // Pre-conditions:
    // Sign in page is open
    //
    // Execution steps:
    // 1. Enter email 'busy@owner.com';
    // 2. Enter password '123123';
    // 3. Click 'Log in' button.
    //
    // Execution results:
    // 1. User icon is visible
    // 2. Current URL contains "/profile/"

    it('Sign in with valid credentials', () => {
        cy.visit('/user/login')

        cy.get('#normal_login_email')
            .type('busy@owner.com')

        cy.get('#normal_login_password')
            .type('123123')
        cy.get('.login-form-button')
            .click()

        cy.get('.ant-avatar-square')
            .should('be.visible')
        cy.location('pathname')
            .should("include", 'profile')


    })
})
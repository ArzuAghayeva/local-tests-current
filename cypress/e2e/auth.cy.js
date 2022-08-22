import LoginPage from '../pages/login.page'
import ProfilePage from '../pages/profile.page'


describe('Authentication', () => {
    beforeEach(() => {
        LoginPage.open()
    })

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
        LoginPage.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))

        ProfilePage.iconAvatar.should('be.visible')
        cy.location('pathname')
            .should('include', 'profile')
    })

    // Pre-conditions:
    // Sign in page is open
    //
    // Execution steps:
    // 1. Enter email 'busy@owner.com';
    // 2. Enter password 'wrong';
    // 3. Click 'Log in' button.
    //
    // Execution results:
    //"Auth failed" message/toast is visible
    it('Sign in with invalid credentials', () => {
        LoginPage.login(Cypress.env('EMAIL'), 'wrong')
        LoginPage.toast.should('have.text', 'Auth failed')
    })

    // Pre-conditions:
    // Sign in page is open
    //
    // Execution steps:
    // 1. Enter email 'wrong';
    // ER: "'email' is not a valid email" validation message displayed
    // 2. Clear email field;
    // ER: "Required" validation message displayed
    // 3. Enter password 'wrong';
    // 4. Clear password field;
    // ER: "Required" validation message displayed

    it('Credentials validation', () => {
        LoginPage.inputEmail.type('test')
        LoginPage.emailValidation
            .should('have.text', '\'email\' is not a valid email')

        LoginPage.inputEmail.clear()

        LoginPage.emailValidation
            .should('have.text', 'Required')

        LoginPage.inputPassword
            .type('wrong')
            .clear()

        LoginPage.passwordValidation
            .should('have.text', 'Required')
    } )
})
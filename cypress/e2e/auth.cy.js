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
        cy.visit('/user/login')

        cy.get('#normal_login_email')
            .type('busy@owner.com')

        cy.get('#normal_login_password')
            .type('wrong')

        cy.get('.login-form-button')
            .click()

        cy.get('.ant-notification-notice-message')
            .should('have.text', 'Auth failed')
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

        cy.visit('/user/login')

        cy.get('#normal_login_email')
            .type('busy')

        cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
            .should('have.text', '\'email\' is not a valid email')

        cy.get('#normal_login_email')
            .clear()

        cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
            .should('have.text', 'Required')

        cy.get('#normal_login_password')
            .type('wrong')
            .clear()

        cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_password"]]//div[@class="ant-form-item-explain-error"]')
            .should('have.text', 'Required')


        // Metod Bonda by Dusty:
        // cy.get('#normal_login_email')
        //     .parents('.ant-col.ant-form-item-control')
        //     .find('.ant-form-item-explain-error')
        //     .should('have.text', 'Required')

    } )
})
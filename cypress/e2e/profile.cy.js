// Pre-conditions:
// 1. Log in
// 2. Profile page is open
//
// Execution steps:
// 1. Click "Create daily report" button;
// 2. Check any activity
// 3. Add 1 hour
// 4. Select "5" in "What is your morale? select";
// 5. Set text "%TIMESTAMP% 123456789012345678901234567890"
// 6. Click "Create" button;
//
// Expected results:
// 1. %TIMESTAMP% is visible in the report
describe('Profile', () => {
    beforeEach(() => {
        cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
        cy.visit(`/profile/${Cypress.env('USER_ID')}`)
        })

    it('Daily report creation', () => {
        const timestamp = new Date().getTime()
        const description = `${timestamp} 123456789012345678901234567890`

        cy.get('[data-qa="dailyReportsBtn"]')
            .click()

        cy.get('input[value="help_classmates"]')
            .click()

        cy.get('[id="labels.help_classmates.hours"]')
            .type('1')

        cy.get('#morale')
            .click()

        cy.get('.ant-select-item[title="5"]')
            .click()

        cy.get('textarea.ant-input')
            .type(description)

        cy.get('[type="submit"]')
            .click()

        cy.xpath(`//div[@class="ant-row mb-4"][contains(text(), "${timestamp}")]`)
            .should('be.visible')
    })
})
import AppPage from './app.page'

class ChallengesPage extends AppPage {
    get ChallengesHeader() { return cy.get('.h1.me-4') }
}

export default new ChallengesPage()
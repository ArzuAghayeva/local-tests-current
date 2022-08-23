import AppPage from './app.page'

class GoalsPage extends AppPage {
    get GoalsHeader() { return cy.get('section[class=\'container pt-4\'] div h1') }
}

export default new GoalsPage()
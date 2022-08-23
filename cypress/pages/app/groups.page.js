import AppPage from './app.page'

class GroupsPage extends AppPage {
    get GroupsHeader() { return cy.get('h1').contains('Groups') }
}

export default new GroupsPage()
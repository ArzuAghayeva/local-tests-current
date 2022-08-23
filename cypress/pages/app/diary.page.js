import AppPage from './app.page'

class DiaryPage extends AppPage {
    get DiaryHeader() { return cy.get('h1').contains('Daily reports') }
}

export default new DiaryPage()
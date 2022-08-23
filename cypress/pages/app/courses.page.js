import AppPage from './app.page'

class CoursesPages extends AppPage {
    get CoursesHeader() { return cy.get('h1').contains('Interactive Courses') }
}

export default new CoursesPages()
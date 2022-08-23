import AppPage from './app.page'

class InterviewQuestionsPage extends AppPage {
    get InterviewQuestions() { return cy.get('h1').contains('Interview practice cards') }
}

export default new InterviewQuestionsPage()
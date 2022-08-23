import MainPage from '../pages/app/main.page'
import ChallengesPage from '../pages/app/challenges.page'
import GoalsPage from '../pages/app/goals.page'
import DiaryPage from '../pages/app/diary.page'
import GroupsPage from '../pages/app/groups.page'
import CoursesPage from '../pages/app/courses.page'
import InterviewquestionsPage from "../pages/app/interviewquestions.page";



describe('Navigation', () => {
    before(() => {
        cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
        cy.reload()
    })

    it('Courses page opens', () => {
        MainPage.navbar.linkCourses.click()
        cy.location('pathname')
            .should('include', 'course')

        CoursesPage.CoursesHeader.should('have.text', 'Interactive Courses')
    })

    it('Interview Questions page opens', () => {
        MainPage.navbar.linkInterviewQuestions.click()
        cy.location('pathname')
            .should('include', 'flash')

        InterviewquestionsPage.InterviewQuestions.should('have.text', 'Interview practice cards')
    })

    it('Diary page opens', () => {
        MainPage.navbar.linkDiary.click()
        cy.location('pathname')
            .should('include', 'diary')

        DiaryPage.DiaryHeader.should('have.text', 'Daily reports')
    })

    it('Challenges page opens', () => {
        MainPage.navbar.linkChallenges.click()
        cy.location('pathname')
            .should('include', 'challenge')

        //ChallengesPage.ChallengesHeader.should('be.visible')
        ChallengesPage.ChallengesHeader.should('have.text', 'Challenges')
    })

    it('Groups page opens', () => {
        MainPage.navbar.linkGroups.click()
        cy.location('pathname')
            .should('include', 'group')

        GroupsPage.GroupsHeader.should('have.text', 'Groups')
    })

    it('Goals page opens', () => {
        MainPage.navbar.linkGoals.click()
        cy.location('pathname')
            .should('include', 'goal')

        GoalsPage.GoalsHeader.should('have.text', 'Goals')
    })
})
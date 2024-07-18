import { faker } from '@faker-js/faker'

describe('Create Issue', () => {
    const issue = {
        title: `issue-${faker.datatype.number()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.number()}`,
            description: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.login()
        cy.api_createProject(issue.project)
    });

    it('Sucesso', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
            .should('contain', issue.title)
            .and('contain', issue.description)
        
    });
});
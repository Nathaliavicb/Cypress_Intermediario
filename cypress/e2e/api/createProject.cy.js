import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => 
  cy.api_deleteProjects())


  it('successfully', () => {

    const project = {
      name: `project-${faker.datatype.number()}`,
      description: faker.random.words(5)
    }
    //Validar se realmente o projeto foi criado
    cy.api_createProject(project)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.description).to.equal(project.description)
      })
  })
})
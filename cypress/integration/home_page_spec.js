
describe('CBP Design System Home Page', function () {
  it('successfully loads', function () {
    cy.visit('/')

    cy.get('h1').should('contain', 'Home Page')
  })
})
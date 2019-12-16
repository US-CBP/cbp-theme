
describe('CBP Design System Home Page', function () {
  it('successfully loads', function () {
    cy.visit('/')

    cy.get('h3').should('contain', 'CBP Style Guide Library')
  })
})
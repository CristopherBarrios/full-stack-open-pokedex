
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to ivysaur page', function() {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})
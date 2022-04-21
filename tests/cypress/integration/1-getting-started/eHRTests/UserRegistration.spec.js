describe('AdminLogin', () => {
    it('Login', () => {
      cy.visit('https://testehr.azurewebsites.net/')
      cy.title().should('eq','Log in / eHRPlus')
     cy.get('.btn-link').should('be.visible').click()
    })
  })
  
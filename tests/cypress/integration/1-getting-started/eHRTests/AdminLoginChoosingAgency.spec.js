describe('AdminLoginWithAgency', () => {
    it('LoginChoosingAgency', () => {
      cy.visit('https://testehr.azurewebsites.net/')
      cy.title().should('eq','Log in / eHRPlus')
      cy.get('#usernameOrEmailAddress').should('be.visible').should('be.enabled').type('admin')
      cy.get('#password').should('be.visible').should('be.enabled').type('Arm3nia!')
      cy.get('#loginBtn').click()
      cy.title().should('eq','Choose Agency / eHRPlus')
      cy.get('#TenancyName').select('Louisa Agency').should('have.value','QAPIPlus-348653a2-bdd0-434e-a691-301a6804299d')
      cy.get('#loginBtn').click()
    })
  })
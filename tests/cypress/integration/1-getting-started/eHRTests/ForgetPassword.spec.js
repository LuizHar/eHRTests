describe('AdminLogin', () => {
    it('Login', () => {
      cy.visit('https://testehr.azurewebsites.net/')
      cy.title().should('eq','Log in / eHRPlus')
      cy.get('#forget-password').should('be.visible').click()
      cy.title().should('eq','Forgot Password / eHRPlus')
      cy.get('#EmailAddress').should('be.visible').should('be.enabled').type('louisaharutyunyan7@gmail.com')
      cy.get('#ForgotPasswordButton').should('be.visible').click()
      cy.get('.swal-button--confirm').should('be.visible').click()
      cy.title().should('eq','Log in / eHRPlus')
    })
  })
cypress/integration/1-getting-started/eHRTests/UserRegistration.spec.js
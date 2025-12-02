/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        // Input valid email
        cy.get('#user-name').type('standard_user')
        cy.get('#user-name').should('have.value', 'standard_user')

        // Input valid password password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        // Click login button
        cy.get('#login-button').click()
    })

    // Test Case about Logout

    it('T004 - logout: User logout', () => {
        // Verify homepage
        cy.contains('Products').should('be.visible')
        cy.contains('Swag Labs').should('be.visible')

        // Open sidebar
        cy.get('.bm-burger-button').click()

        // Go to side bar menu Reset App State
        cy.get('#logout_sidebar_link').click()

        // Verify back to login page
        cy.get('#login-button').should('be.visible')
        cy.get('#user-name').should('be.visible')
        cy.get('#password').should('be.visible')

    })

})


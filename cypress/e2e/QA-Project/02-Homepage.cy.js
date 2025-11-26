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

    // Test Case about Homepage

    it('T001 - homepage: User landed on homepage', () => {
        // Verify homepage
        cy.contains('Products').should('be.visible')
        cy.contains('Swag Labs').should('be.visible')

    })

    it('T002 - homepage: User open and close sidebar menu', () => {
        // Open sidebar
        cy.get('.bm-burger-button').click()
        cy.wait(2000);

        // Close sidebar
        cy.get('.bm-cross-button').click()
    })

    it('T003 - homepage: Filter Name A to Z', () => {
        // Open filter
        cy.get('div.right_component').click()
        cy.get('div.right_component').select('Name (Z to A)')

    })

})
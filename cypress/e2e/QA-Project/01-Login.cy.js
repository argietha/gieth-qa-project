/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // Test Case about Login

    it('T001 - login: Login with valid username and password', () => {
        // Input valid username
        cy.get('#user-name').type('standard_user')
        cy.get('#user-name').should('have.value', 'standard_user')

        // Input valid password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        // Click login button
        cy.get('#login-button').click()

        // Verify homepage
        cy.contains('Products').should('be.visible')
    })

    it('T002 - login: Login with locket_out user', () => {
        // Input valid username
        cy.get('#user-name').type('locked_out_user')
        cy.get('#user-name').should('have.value', 'locked_out_user')

        // Input valid password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        // Click login button
        cy.get('#login-button').click()

        // Verify error message
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
    })

    it('T003 - login: Login with empty username', () => {
        // Empty username

        // Input valid password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        // Click login button
        cy.get('#login-button').click()

        // Verify error image
        cy.contains('Epic sadface: Username is required').should('be.visible')
    })

    it('T004 - login: Login with empty password', () => {
        // Input valid username
        cy.get('#user-name').type('standard_user')
        cy.get('#user-name').should('have.value', 'standard_user')

        // Empty password

        // Click login button
        cy.get('#login-button').click()

        // Verify error image
        cy.contains('Epic sadface: Password is required').should('be.visible')
    })

    it('T005 - login: Login with empty username and password', () => {
        // Empty username

        // Empty email

        // Click login button
        cy.get('#login-button').click()

        // Verify error image
        cy.contains('Epic sadface: Username is required').should('be.visible')
    })

    it('T006 - login: Login with not register user', () => {
        // Not register username
        cy.get('#user-name').type('standard_user112')
        cy.get('#user-name').should('have.value', 'standard_user112')

        // Input valid password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        // Click login button
        cy.get('#login-button').click()

        // Verify error image
        cy.contains('Username and password do not match any user in this service').should('be.visible')
    })

    it('T007 - login: Login with valid username and password, click Enter keyboard', () => {
        // Input valid username
        cy.get('#user-name').type('standard_user')
        cy.get('#user-name').should('have.value', 'standard_user')

        // Input valid password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce').type('{enter}');

        // Verify homepage
        cy.contains('Products').should('be.visible')
    })

    it('T008 - login: Close error message', () => {
        // Empty username

        // Input valid password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        // Click login button
        cy.get('#login-button').click()

        // Verify error image
        cy.contains('Epic sadface: Username is required').should('be.visible')

        // Close error message
        cy.get('.error-button').click()
    })

    it('T009 - login: Login with problem user', () => {
        // Input valid email
        cy.get('#user-name').type('problem_user')
        cy.get('#user-name').should('have.value', 'problem_user')

        // Input valid password password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        // Click login button
        cy.get('#login-button').click()

        // Verify error image
        cy.get('img[src="/static/media/sl-404.168b1cce10384b857a6f.jpg"]').should('be.visible')
    })

})
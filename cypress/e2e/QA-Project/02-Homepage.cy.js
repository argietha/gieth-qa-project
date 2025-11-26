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

    it('T003 - homepage: User go to Cart page', () => {
        // Go to Cart page
        cy.get('#shopping_cart_container').click()
        cy.wait(2000);

        // Back to homepage
        cy.get('#continue-shopping').click()
    })

    it('T004 - homepage: Filter Name Z to A', () => {
        // Open filter
        cy.get('.right_component > .select_container span')
            .click({ force: true });

        // Choose filter from Z to A
        cy.get('[data-test="product-sort-container"]').select('za')

        // Validate first product on list after using filter Z to A
        cy.contains('Test.allTheThings() T-Shirt (Red)').should('be.visible')

    })

    it('T005 - homepage: Filter Name A to Z', () => {
        // Open filter
        cy.get('.right_component > .select_container span')
            .click({ force: true });

        // Choose filter from Z to A
        cy.get('[data-test="product-sort-container"]').select('za')
        // Choose filter from A to Z
        cy.get('[data-test="product-sort-container"]').select('az')

        // Validate first product on list after using filter Z to A
        cy.contains('Sauce Labs Backpack').should('be.visible')

    })

    it('T006 - homepage: Filter Price Low to High', () => {
        // Open filter
        cy.get('.right_component > .select_container span')
            .click({ force: true });

        // Choose filter from Low to High
        cy.get('[data-test="product-sort-container"]').select('lohi')

        // Validate first product on list after using filter Low to High
        cy.contains('Sauce Labs Onesie').should('be.visible')

    })

    it('T007 - homepage: Filter Price High to Low', () => {
        // Open filter
        cy.get('.right_component > .select_container span')
            .click({ force: true });

        // // Choose filter from High to Low
        cy.get('[data-test="product-sort-container"]').select('hilo')

        // Validate first product on list after using filter High to Low
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible')

    })

    it('T008 - homepage: Click on platform Twitter', () => {
        // Scroll to Bottom
        cy.scrollTo('bottom')

        // Click on platform Twitter
        cy.get('.social_twitter').click()

    })

    it('T009 - homepage: Click on platform Facebook', () => {
        // Scroll to Bottom
        cy.scrollTo('bottom')

        // Click on platform Facebook
        cy.get('.social_facebook').click()

    })

    it('T010 - homepage: Click on platform Linkedin', () => {
        // Scroll to Bottom
        cy.scrollTo('bottom')

        // Click on platform Linkedin
        cy.get('.social_linkedin').click()

    })

})
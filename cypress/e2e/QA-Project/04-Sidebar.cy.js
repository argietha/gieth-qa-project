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

    // Test Case about Sidebar menu

    it('T001 - side bar memnu: User open and close sidebar menu', () => {
        // Verify homepage
        cy.contains('Products').should('be.visible')
        cy.contains('Swag Labs').should('be.visible')

        // Open sidebar
        cy.get('.bm-burger-button').click()
        cy.wait(2000);

        // Close sidebar
        cy.get('.bm-cross-button').click()
    })

    it('T002 - side bar memnu: Validate side bar menu', () => {
        // Verify homepage
        cy.contains('Products').should('be.visible')
        cy.contains('Swag Labs').should('be.visible')

        // Open sidebar
        cy.get('.bm-burger-button').click()

        // Validate all menu items are visible
        cy.contains('All Items').should('be.visible')
        cy.contains('About').should('be.visible')
        cy.contains('Logout').should('be.visible')
        cy.contains('Reset App State').should('be.visible')
    })

    it('T003 - side bar memnu: User go to About page', () => {
        // Verify homepage
        cy.contains('Products').should('be.visible')
        cy.contains('Swag Labs').should('be.visible')

        // Open sidebar
        cy.get('.bm-burger-button').click()

        // Go to side bar menu About
        cy.get('#about_sidebar_link')
            .should('have.attr', 'href', 'https://saucelabs.com/');

    })
    it('T004 - side bar memnu: User Reset App State', () => {
        // Verify homepage
        cy.contains('Products').should('be.visible')
        cy.contains('Swag Labs').should('be.visible')

        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        //Validate Add to cart button change to remove button
        cy.contains('Remove').should('be.visible')

        //Validate cart icon show number 2
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Open sidebar
        cy.get('.bm-burger-button').click()

        // Go to side bar menu Reset App State
        cy.get('#reset_sidebar_link').click()

        //Validate cart icon to show badge
        cy.get('.shopping_cart_badge')
            .should('not.exist')
        //logout_sidebar_link
    })

})


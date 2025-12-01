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

    // Test Case about Cart page

    it('T001 - cartpage: User landed on cart page', () => {
        // User go to cart page
        cy.get('#shopping_cart_container').click()
        cy.contains('Checkout').should('be.visible')

    })

    it('T002 - cartpage: User landed on homepage from cart page', () => {
        // User go to cart page
        cy.get('#shopping_cart_container').click()
        cy.contains('Checkout').should('be.visible')

        // User back to homepage
        cy.get('#continue-shopping').click()
        cy.contains('Products').should('be.visible')

    })

    it('T003 - cartpage: User add product and see product in cart page', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '1')

    })

    it('T004 - cartpage: User add more than one product and see all products in cart page', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

    })

    it('T005 - cartpage: User add product and remove product from cart page', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '1')

        // Remove product from cart page
        cy.get('#remove-sauce-labs-backpack').click()

        // Validate product is removed from cart page
        cy.contains('Sauce Labs Backpack').should('not.exist')
        cy.get('.shopping_cart_badge')
            .should('not.exist')

    })

    it('T006 - cartpage: User add some product and remove half product from cart page', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Remove product from cart page
        cy.get('#remove-sauce-labs-backpack').click()

        // Validate product is removed from cart page
        cy.contains('Sauce Labs Backpack').should('not.exist')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '2')

    })

    it('T007 - cartpage: User add some product and remove all product from cart page', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Remove product from cart page
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-bike-light').click()
        cy.get('#remove-sauce-labs-bolt-t-shirt').click()

        // Validate product is removed from cart page
        cy.get('.shopping_cart_badge')
            .should('not.exist')

    })

    it('T008 - cartpage: User go to Checkoutpage', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

    })

    it('T009 - cartpage: User go back to cart page from checkout page', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // User back to cart page
        cy.get('#cancel').click()

        // Validate user is on cart page
        cy.contains('Your Cart').should('be.visible')

    })

    it('T010 - cartpage: User checkout producs but First Name field empty', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // Input valid First Name
        cy.get('#first-name').clear()

        // Input valid Last Name
        cy.get('#last-name').type('Project')
        cy.get('#last-name').should('have.value', 'Project')

        // Input valid ZIP/Postal Code
        cy.get('#postal-code').type('13740')
        cy.get('#postal-code').should('have.value', '13740')

        // Click continue button
        cy.get('#continue').click()

        // Validate error message for empty First Name
        cy.contains('Error: First Name is required').should('be.visible')
        cy.wait(5000);

        // Click X button on error message
        cy.get('.error-button').click()

    })

    it('T011 - cartpage: User checkout producs but Last Name field empty', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // Input valid First Name
        cy.get('#first-name').type('Gita')
        cy.get('#first-name').should('have.value', 'Gita')

        // Input valid Last Name
        cy.get('#last-name').clear()

        // Input valid ZIP/Postal Code
        cy.get('#postal-code').type('13740')
        cy.get('#postal-code').should('have.value', '13740')

        // Click continue button
        cy.get('#continue').click()

        // Validate error message for empty First Name
        cy.contains('Error: Last Name is required').should('be.visible')
        cy.wait(5000);

        // Click X button on error message
        cy.get('.error-button').click()

    })

    it('T012 - cartpage: User checkout producs but Last Name field empty', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // Input valid First Name
        cy.get('#first-name').type('Gita')
        cy.get('#first-name').should('have.value', 'Gita')

        // Input valid Last Name
        cy.get('#last-name').type('Project')
        cy.get('#last-name').should('have.value', 'Project')

        // Input valid ZIP/Postal Code
        cy.get('#postal-code').clear()

        // Click continue button
        cy.get('#continue').click()

        // Validate error message for empty First Name
        cy.contains('Error: Postal Code is required').should('be.visible')
        cy.wait(5000);

        // Click X button on error message
        cy.get('.error-button').click()

    })

    it('T012 - cartpage: User checkout producs but all fields empty', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // Input valid First Name
        cy.get('#first-name').clear()

        // Input valid Last Name
        cy.get('#last-name').clear()

        // Input valid ZIP/Postal Code
        cy.get('#postal-code').clear()

        // Click continue button
        cy.get('#continue').click()

        // Validate error message for empty First Name
        cy.contains('Error: First Name is required').should('be.visible')
        cy.wait(5000);

        // Click X button on error message
        cy.get('.error-button').click()

    })


    it('T013 - cartpage: User checkout producs', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // Input valid First Name
        cy.get('#first-name').type('Gita')
        cy.get('#first-name').should('have.value', 'Gita')

        // Input valid Last Name
        cy.get('#last-name').type('Project')
        cy.get('#last-name').should('have.value', 'Project')

        // Input valid ZIP/Postal Code
        cy.get('#postal-code').type('13740')
        cy.get('#postal-code').should('have.value', '13740')

        // Click continue button
        cy.get('#continue').click()

        // Validate user is on checkout page
        cy.contains('Checkout: Overview').should('be.visible')
        cy.contains('Payment Information:').should('be.visible')

    })

    it('T014 - cartpage: Go back to cart page from check out page', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // Input valid First Name
        cy.get('#first-name').type('Gita')
        cy.get('#first-name').should('have.value', 'Gita')

        // Input valid Last Name
        cy.get('#last-name').type('Project')
        cy.get('#last-name').should('have.value', 'Project')

        // Input valid ZIP/Postal Code
        cy.get('#postal-code').type('13740')
        cy.get('#postal-code').should('have.value', '13740')

        // Click continue button
        cy.get('#continue').click()

        // Validate user is on checkout page
        cy.contains('Checkout: Overview').should('be.visible')
        cy.contains('Payment Information:').should('be.visible')

        // User back to cart page from checkout page
        cy.get('#cancel').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')
    })

    it('T015 - cartpage: Validate price on checkout page', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // Input valid First Name
        cy.get('#first-name').type('Gita')
        cy.get('#first-name').should('have.value', 'Gita')

        // Input valid Last Name
        cy.get('#last-name').type('Project')
        cy.get('#last-name').should('have.value', 'Project')

        // Input valid ZIP/Postal Code
        cy.get('#postal-code').type('13740')
        cy.get('#postal-code').should('have.value', '13740')

        // Click continue button
        cy.get('#continue').click()

        // Validate user is on checkout page
        cy.contains('Checkout: Overview').should('be.visible')
        cy.contains('Payment Information:').should('be.visible')

        // Validate the price
        let itemTotal = 0
        let tax = 0
        let grandTotalUI = 0

        // Get subtotal == all price of items
        cy.get('.summary_subtotal_label')
            .invoke('text')
            .then((text) => {
                itemTotal = parseFloat(text.replace('Item total: $', ''))
            })

        // Get tax amount
        cy.get('.summary_tax_label')
            .invoke('text')
            .then((text) => {
                tax = parseFloat(text.replace('Tax: $', ''))
            })

        // Get grand total from UI 
        cy.get('.summary_total_label')
            .invoke('text')
            .then((text) => {
                grandTotalUI = parseFloat(text.replace('Total: $', ''))

                // Validate grand total UI = item total + tax
                expect(grandTotalUI).to.equal(itemTotal + tax)
            })

    })

    it('T016 - cartpage: Finish checkout', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // Input valid First Name
        cy.get('#first-name').type('Gita')
        cy.get('#first-name').should('have.value', 'Gita')

        // Input valid Last Name
        cy.get('#last-name').type('Project')
        cy.get('#last-name').should('have.value', 'Project')

        // Input valid ZIP/Postal Code
        cy.get('#postal-code').type('13740')
        cy.get('#postal-code').should('have.value', '13740')

        // Click continue button
        cy.get('#continue').click()

        // Validate user is on checkout page
        cy.contains('Checkout: Overview').should('be.visible')
        cy.contains('Payment Information:').should('be.visible')

        // Finish checkout
        cy.get('#finish').click()

        // Validate user is on checkout complete page
        cy.contains('Checkout: Complete!').should('be.visible')
        cy.contains('Thank you for your order!').should('be.visible')


    })

    it('T017 - cartpage: Back home after checkout', () => {
        // User Add to cart product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        // User go to cart page
        cy.get('#shopping_cart_container').click()

        // Validate product is in the cart page
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Remove').should('be.visible')
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '3')

        // Checkout products
        cy.get('#checkout').click()

        // Validate user is on checkout: your information page
        cy.contains('Checkout: Your Information').should('be.visible')

        // Input valid First Name
        cy.get('#first-name').type('Gita')
        cy.get('#first-name').should('have.value', 'Gita')

        // Input valid Last Name
        cy.get('#last-name').type('Project')
        cy.get('#last-name').should('have.value', 'Project')

        // Input valid ZIP/Postal Code
        cy.get('#postal-code').type('13740')
        cy.get('#postal-code').should('have.value', '13740')

        // Click continue button
        cy.get('#continue').click()

        // Validate user is on checkout page
        cy.contains('Checkout: Overview').should('be.visible')
        cy.contains('Payment Information:').should('be.visible')

        // Finish checkout
        cy.get('#finish').click()

        // Validate user is on checkout complete page
        cy.contains('Checkout: Complete!').should('be.visible')
        cy.contains('Thank you for your order!').should('be.visible')

        // Back home to homepage
        cy.get('#back-to-products').click()

        // User back to homepage
        cy.contains('Products').should('be.visible')
        cy.contains('Swag Labs').should('be.visible')

    })
})

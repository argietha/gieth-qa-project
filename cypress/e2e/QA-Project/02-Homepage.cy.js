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
        cy.get('.inventory_item_name')
            .then($names => {
                const names = [...$names].map(n => n.innerText)
                // Sort Z to A (reverse)
                const sorted = [...names].sort().reverse()
                // Validate name from Z to A
                expect(names).to.deep.equal(sorted)
            })

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
        cy.get('.inventory_item_name')
            .then($names => {
                const names = [...$names].map(n => n.innerText)
                // Sort A to Z
                const sorted = [...names].sort()
                // Validate name from A to Z
                expect(names).to.deep.equal(sorted)
            })

    })

    it('T006 - homepage: Filter Price Low to High', () => {
        // Open filter
        cy.get('.right_component > .select_container span')
            .click({ force: true });

        // Choose filter from Low to High
        cy.get('[data-test="product-sort-container"]').select('lohi')

        // Validate first product on list after using filter Low to High
        cy.contains('Sauce Labs Onesie').should('be.visible')
        cy.get('.pricebar')
            .then($prices => {
                const numbers = [...$prices].map(p => parseFloat(p.innerText.replace('$', '')))
                const sorted = [...numbers].sort((a, b) => a - b)  // sort descending
                expect(numbers[0]).to.eq(sorted[0])               // validate harga terendah
            })
    })

    it('T007 - homepage: Filter Price High to Low', () => {
        // Open filter
        cy.get('.right_component > .select_container span')
            .click({ force: true });

        // // Choose filter from High to Low
        cy.get('[data-test="product-sort-container"]').select('hilo')

        // Validate first product on list after using filter High to Low
        cy.get('.pricebar')
            .then($prices => {
                const numbers = [...$prices].map(p => parseFloat(p.innerText.replace('$', '')))
                const sorted = [...numbers].sort((a, b) => b - a)  // sort descending
                expect(numbers[0]).to.eq(sorted[0])               // validate harga tertinggi di posisi 1
            })
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

    it('T010 - homepage: Click on platform Linkedin', () => {
        // Scroll to Bottom
        cy.scrollTo('bottom')

        // Click on platform Linkedin
        cy.get('.social_linkedin').click()

    })

    it('T010 - homepage: Click on platform Linkedin', () => {
        // Scroll to Bottom
        cy.scrollTo('bottom')

        // Click on platform Linkedin
        cy.get('.social_linkedin').click()

    })

    it('T011 - homepage: Go to Detail product by click Image procduct', () => {
        // Click on the Image on the list
        cy.get('#item_4_img_link').click()

        //Validate user is on the detail product page
        cy.get('.inventory_details_desc_container').should('be.visible')

    })

    it('T012 - homepage: Go to Detail product by click Name procduct', () => {
        // Click on the product on the list
        cy.contains('Sauce Labs Backpack').click()

        //Validate user is on the detail product page
        cy.get('.inventory_details_desc_container').should('be.visible')

    })

    it('T013 - homepage: Go to Detail product by click Description procduct', () => {
        // Click on the product on the list
        cy.contains('carry.allTheThings()').click()

        //Validate user is not going to detail product page
        cy.contains('A to Z').should('be.visible')

    })

    it('T014 - homepage: User can add product on Homepage list', () => {
        // Click on the product on the list
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        //Validate Add to cart button change to remove button
        cy.contains('Remove').should('be.visible')

        //Validate cart icon show number 1
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '1')

    })


    it('T015 - homepage: User can add multiple product on Homepage list', () => {
        // Click on the product on the list
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()

        //Validate Add to cart button change to remove button
        cy.contains('Remove').should('be.visible')

        //Validate cart icon show number 2
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '2')

    })

    it('T016 - homepage: User can remove product on Homepage list', () => {
        // Click on the product on the list
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        //Validate Add to cart button change to remove button
        cy.contains('Remove').should('be.visible')

        //Validate cart icon show number 1
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '1')

        // Click remove button to remove product on the cart
        cy.get('#remove-sauce-labs-backpack').click()

        //Validate remove button not to show anymore
        cy.contains('Remove').should('not.exist')

        //Validate cart icon to show badge
        cy.get('.shopping_cart_badge')
            .should('not.exist')

    })

    it('T017 - homepage: User can partial remove product on Homepage list', () => {
        // Click on the product on the list
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()

        //Validate Add to cart button change to remove button
        cy.contains('Remove').should('be.visible')

        //Validate cart icon show number 2
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '2')

        // Click remove button to remove product on the cart
        cy.get('#remove-sauce-labs-backpack').click()

        //Validate remove button still show for partial product
        cy.contains('Remove').should('be.visible')

        //Validate cart icon show number 1
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '1')

    })

    it('T018 - homepage: User can remove all product on Homepage list', () => {
        // Click on the product on the list
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()

        //Validate Add to cart button change to remove button
        cy.contains('Remove').should('be.visible')

        //Validate cart icon show number 2
        cy.get('#shopping_cart_container')
            .should('be.visible')
            .and('have.text', '2')

        // Click remove button to remove product on the cart
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-bike-light').click()

        //Validate remove button not to show anymore
        cy.contains('Remove').should('not.exist')

        //Validate cart icon not show badge
        cy.get('.shopping_cart_badge')
            .should('not.exist')

    })
})
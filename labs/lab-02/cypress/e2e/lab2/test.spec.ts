/// <reference types="cypress"/>

/*
    TEST #0001
    1. Wyszukanie produktu `Fruit of the Loom T-Shirts 5 Pack - Super Premium`
    2. Sprawdzenie ceny bazowej
    3. Wybór rozmiaru
    4. Wprowadzenie ilości
    5. Sprawdzenie przeliczania ceny na podstawie ilości i ceny bazowej
    6. Kliknięcie w `Dodaj do koszyka`
    7. Sprawdzenie, czy ten produkt jest w koszyku
*/

// const PRODUCT_NAME = "Fruit of the Loom T-Shirts 5 Pack - Super Premium";
const product = {
    name: "Fruit of the Loom T-Shirts 5 Pack - Super Premium",
    basePrice: 9.99,
    size: "X-Large",
    quantity: 7
}

describe('', () => {
    before('', () => {
    });

    beforeEach('', () => {
    });

    it('', () => {
        cy.visit('/');

        // `should("be.visible")` - czeka, aż element DOM zostanie załadowany

        // # Poprzez kliknięcie w `lupkę`
        // cy.get("#filter_keyword").type("Fruit of the Loom T-Shirts 5 Pack - Super Premium");
        // cy.get(".fa.fa-search").click();

        // # Poprzez kliknięcie `Enter`
        cy.get("#filter_keyword")
            .should("be.visible")
            .type(`${product.name}{enter}`, { delay: 50 });

        // # Sprawdzenie, czy nagłówek produktu jest poprawny
        // assertion (sprawdzenie, standard)
        cy.get(".bgnone")
            .should("be.visible")
            // .and("have.text", product.name); // równy 
            .and("contain.text", product.name); // zawiera 

        // # Sprawdzenie, czy cena bazowa jest poprawna
        // assertion
        cy.get(".productfilneprice")
            .should("be.visible")
            .and("contain.text", `$${product.basePrice.toFixed(2)}`);

        // # Trim tekstu
        // cy.get(".productfilneprice")
        //     .should("be.visible")
        //     .then(($basePrice) => {
        //         expect($basePrice.text().trim()).be.eql(`$${product.basePrice}`)
        //     });

        // # Wybór rozmiaru
        // cy.get('[id^="option"]')
        //     .should('be.visible')
        //     .select('768')

        const productSize = cy.get('[id^="option"]');

        productSize.should('be.visible')
            .select(product.size);
        
        // ## Sprawdzenie, czy wybór zadziałał poprawnie
        productSize
            .find('option')
            .should('contain.text', product.size);

        // # Wprowadzenie ilości produktów
        cy.get("#product_quantity")
            .should('be.visible')
            .clear()
            .type(`${product.quantity}`);

        // # Sprawdzenie, czy przeliczona cena się zgadza
        cy.get(".total-price")
            .should('be.visible')
            .and('have.text', `$${product.quantity * product.basePrice}`);

        // # Dodanie do koszyka
        cy.contains('.cart', 'Add to Cart')
            .should('be.visible')
            .click();
        
        // # Sprawdzenie, czy produkt został poprawnie dodane do koszyka
        cy.get('.table > tbody > tr')
            .should('be.visible')
            .eq(1).find('td')
            .eq(1).should('contain.text', `${product.name}`);
    });
});
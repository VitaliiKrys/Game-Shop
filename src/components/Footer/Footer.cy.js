import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

describe('Footer Component', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>,
        );
    });

    it('displays contact information correctly', () => {
        cy.contains('Телефони:');
        cy.contains(' +38050565221');
    });

    it('contains navigation links to information pages', () => {
        cy.get('a').contains('Інформація').should('have.attr', 'href', '/Info');
        cy.get('a').contains('Оплата та доставка').should('have.attr', 'href', '/Info');
        cy.get('a').contains('Обмін та повернення').should('have.attr', 'href', '/Info');
        cy.get('a').contains('Бонусні жетони').should('have.attr', 'href', '/Info');
        cy.get('a').contains('Відгуки').should('have.attr', 'href', '/Reviews');
    });

    it('contains popular products links', () => {
        cy.get('a').contains('PlayStation').should('have.attr', 'href', '/ProductPs');
        cy.get('a').contains('Xbox').should('have.attr', 'href', '/ProductXb');
        cy.get('a').contains('Nintendo Switch').should('have.attr', 'href', '/ProductNs');
    });

    it('displays the address correctly', () => {
        cy.contains('Ужгород вулиця Загорська , 89');
    });

    it('displays social media icons with correct links', () => {
        cy.get('a[href="https://www.instagram.com"]').should('exist');
        cy.get('a[href="https://web.telegram.org/a/"]').should('exist');
        cy.get('a[href="https://x.com/"]').should('exist');
    });
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header Component', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter initialEntries={['/']}>
                <Header />
            </MemoryRouter>,
        );
    });

    it('displays logo and title', () => {
        cy.get('img[alt="Logo"]').should('be.visible');
        cy.contains('h1', 'Game Shop').should('be.visible');
    });

    it('displays Nintendo, Bucket, and Profile icons', () => {
        cy.get('img[alt="Nintendo"]').should('be.visible');
        cy.get('img[alt="Bucket"]').should('be.visible');
        cy.get('img[alt="Profile"]').should('be.visible');
    });

    it('navigation links work correctly', () => {
        cy.get('a[href="/Cart"]').should('exist');
        cy.get('a[href="/Information"]').should('exist');
    });
});

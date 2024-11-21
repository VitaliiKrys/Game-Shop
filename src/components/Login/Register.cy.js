import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Register from './Register';

describe('Register Component', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter initialEntries={['/Register']}>
                <Register />
            </MemoryRouter>,
        );
    });

    it('displays the registration form', () => {
        cy.contains('h1', 'Register').should('be.visible');
        cy.get('input[type="email"]').should('be.visible');
        cy.get('input[type="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
    });

    it('shows error message when password is too short', () => {
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('input[type="password"]').type('12a3');
        cy.get('button[type="submit"]').click();

        cy.contains('Password is too short').should('be.visible');
    });

    it('submits the form and navigates to home on successful registration', () => {
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('input[type="password"]').type('1a23456');
        cy.get('button[type="submit"]').click();
    });

    it('has a link to the login page', () => {
        cy.get('a[href="/Login"]').should('exist');
        cy.contains('Маєте акаунт? Увійдіть').should('be.visible');
    });
});

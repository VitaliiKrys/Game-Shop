import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { auth } from '../../firebase';
import Information from './Information';

describe('Information Component', () => {
    beforeEach(() => {
        cy.stub(auth, 'onAuthStateChanged').callsFake((callback) => {
            const mockUser = { email: 'testuser@example.com' };
            callback(mockUser);
            return () => {};
        });

        cy.mount(
            <MemoryRouter>
                <Information />
            </MemoryRouter>,
        );
    });

    afterEach(() => {
        auth.onAuthStateChanged.restore && auth.onAuthStateChanged.restore();
    });

    it('displays user email when authenticated', () => {
        cy.contains('Ваш акаунт:').should('be.visible');
        cy.contains('Email: testuser@example.com').should('be.visible');
    });

    it('displays "Вийти з акаунта" button when authenticated', () => {
        cy.contains('Вийти з акаунта').should('be.visible');
    });

    it('displays login button and link when not authenticated', () => {
        auth.onAuthStateChanged.restore();
        cy.stub(auth, 'onAuthStateChanged').callsFake((callback) => {
            callback('');
            return () => {};
        });

        cy.mount(
            <MemoryRouter>
                <Information />
            </MemoryRouter>,
        );

        cy.contains('Будь ласка, увійдіть до свого акаунта.').should('be.visible');
        cy.get('a[href="/Login"]').should('contain', 'Увійти');
    });

    it('logs out user when "Вийти з акаунта" button is clicked', () => {
        cy.stub(auth, 'signOut').resolves();

        cy.contains('Вийти з акаунта').click();
        cy.contains('Будь ласка, увійдіть до свого акаунта.').should('be.visible');
    });
});

import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Login from './Login';

describe('Компонент Login', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter initialEntries={['/login']}>
                <Login />
            </MemoryRouter>,
        );
    });

    it('рендерить форму входу', () => {
        cy.contains('h1', 'Login').should('be.visible');
        cy.get('input[type="email"]').should('be.visible');
        cy.get('input[type="password"]').should('be.visible');
        cy.get('button[type="submit"]').contains('Login').should('be.visible');
        cy.contains('Не маєте акаунта? Зареєструйтесь').should('be.visible');
    });

    it('відображає повідомлення про помилку при невдалому вході', () => {
        cy.get('input[type="email"]').type('wrongemail@example.com');
        cy.get('input[type="password"]').type('wrongpassword');

        cy.stub(signInWithEmailAndPassword, 'callsFake').callsFake(() => {
            return Promise.reject(new Error('auth/user-not-found'));
        });

        cy.get('button[type="submit"]').click();

        cy.contains('Вибачте, ваш аккаунт не був знайдений').should('be.visible');
    });

    it('перенаправляє на головну сторінку після успішного входу', () => {
        const navigate = cy.stub();

        cy.mount(
            <MemoryRouter initialEntries={['/login']}>
                <Login />
            </MemoryRouter>,
        );

        cy.get('input[type="email"]').type('correctemail@example.com');
        cy.get('input[type="password"]').type('correctpassword');

        cy.stub(signInWithEmailAndPassword, 'callsFake').callsFake(() => {
            return Promise.resolve();
        });

        cy.get('button[type="submit"]').click();

        cy.wrap(navigate).should('have.been.calledWith', '/');
    });
});

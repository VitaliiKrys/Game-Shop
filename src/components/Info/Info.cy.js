import { mount } from 'cypress/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-mock-store';

import Info from './Info';

const mockStore = configureStore([]);

describe('Info Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            cartSlice: {
                purchasedGames: 3,
            },
        });

        mount(
            <Provider store={store}>
                <Info />
            </Provider>,
        );
    });

    it('displays payment and delivery information sections', () => {
        cy.contains('Оплата та доставка').should('be.visible');
        cy.contains('Обмін та повернення').should('be.visible');
    });

    it('opens and closes payment modal', () => {
        cy.log('Opening payment modal');
        cy.contains('Оплата картою 💳').click();

        cy.log('Verifying payment modal is visible');
        cy.contains('Оплата картою').should('be.visible');

        cy.log('Closing payment modal');
        cy.contains('Оплата картою 💳').click();

        cy.log('Verifying payment modal is not visible');
        cy.contains('Оплата картою', { timeout: 10_000 }).should('not.exist');
    });

    it('opens and closes cash on delivery modal', () => {
        cy.log('Opening cash on delivery modal');
        cy.contains('Накладний платіж 💵').click();

        cy.log('Verifying cash on delivery modal is visible');
        cy.contains('Метод оплати "Накладений платіж"').should('be.visible');

        cy.log('Closing cash on delivery modal');
        cy.contains('Накладний платіж 💵').click();

        cy.log('Verifying cash on delivery modal is not visible');
        cy.contains('Метод оплати "Накладений платіж"', { timeout: 10_000 }).should('not.exist');
    });

    it('displays available tokens and activates one', () => {
        cy.log('Verifying available tokens section is visible');
        cy.contains('Бонусні жетони').should('be.visible');

        cy.log('Checking if Beginner Gamer token exists');
        cy.contains('Beginner Gamer').should('exist');

        cy.log('Activating Beginner Gamer token');
        cy.contains('Beginner Gamer').click();
        cy.contains('Активувати жетон').should('not.be.disabled').click();

        cy.log('Verifying token activation');
        cy.contains('Активувати жетон').should('be.disabled');
    });

    it('opens and closes delivery cost modal', () => {
        cy.log('Opening delivery cost modal');
        cy.contains('Вартість доставки').click();

        cy.log('Verifying delivery cost modal is visible');
        cy.contains('Вартість доставки').should('be.visible');

        cy.log('Closing delivery cost modal');
        cy.contains('Вартість доставки').click();

        cy.log('Verifying delivery cost modal is not visible');
        cy.contains('Вартість доставки', { timeout: 10_000 }).should('not.exist');
    });

    it('opens and closes return policy modal', () => {
        cy.log('Opening return policy modal');
        cy.contains('Умови повернення 📄').click();

        cy.log('Verifying return policy modal is visible');
        cy.contains('Умови повернення').should('be.visible');

        cy.log('Closing return policy modal');
        cy.contains('Умови повернення 📄').click();

        cy.log('Verifying return policy modal is not visible');
        cy.contains('Умови повернення', { timeout: 10_000 }).should('not.exist');
    });

    it('opens and closes quality guarantee modal', () => {
        cy.log('Opening quality guarantee modal');
        cy.contains('Гарантія якості Game Shop 💎').click();

        cy.log('Verifying quality guarantee modal is visible');
        cy.contains('Гарантія якості Game Shop').should('be.visible');

        cy.log('Closing quality guarantee modal');
        cy.contains('Гарантія якості Game Shop 💎').click();

        cy.log('Verifying quality guarantee modal is not visible');
        cy.contains('Гарантія якості Game Shop', { timeout: 10_000 }).should('not.exist');
    });
});

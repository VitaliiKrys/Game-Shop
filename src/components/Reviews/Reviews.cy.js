import React from 'react';

import Reviews from './Reviews';

describe('Reviews Component', () => {
    beforeEach(() => {
        cy.mount(<Reviews />);
        // Очищення localStorage перед кожним тестом
        cy.window().then((win) => {
            win.localStorage.clear();
        });
    });

    it('renders reviews form and list', () => {
        cy.contains('Відгуки про магазин Game Shop').should('be.visible');
        cy.contains('Додати відгук').should('be.visible');
        cy.contains('Середній рейтинг: 0 ★').should('be.visible');
    });

    it('allows user to set rating by clicking stars', () => {
        // Клік на 4-ту зірку
        cy.get('[data-testid="star-4"]').click();

        // Перевірка, що 4-та зірка має клас з частковим значенням 'filled'
        cy.get('[data-testid="star-4"]').invoke('attr', 'class').should('contain', 'filled'); // Перевірка, що клас містить 'filled'
    });

    it('allows user to enter name, review text, and submit', () => {
        cy.get('input[type="text"]').type("Ім'я користувача");
        cy.get('textarea').type('Це тестовий відгук');
        cy.get('[data-testid="star-5"]').click();
        cy.get('button').contains('Відправити ваш відгук').click();

        // Перевірка додавання нового відгуку
        cy.contains("Ім'я користувача").should('be.visible');
        cy.contains('Це тестовий відгук').should('be.visible');
        cy.contains('★★★★★').should('be.visible');
    });

    it('saves reviews to localStorage', () => {
        cy.get('input[type="text"]').type("Ім'я користувача");
        cy.get('textarea').type('Це тестовий відгук для збереження');
        cy.get('[data-testid="star-3"]').click();
        cy.get('button').contains('Відправити ваш відгук').click();

        cy.window().then((win) => {
            const savedReviews = JSON.parse(win.localStorage.getItem('reviews'));
            expect(savedReviews).to.have.length(1);
            expect(savedReviews[0].name).to.equal("Ім'я користувача");
            expect(savedReviews[0].reviewText).to.equal('Це тестовий відгук для збереження');
            expect(savedReviews[0].rating).to.equal(3);
        });
    });

    it('calculates and displays average rating correctly', () => {
        cy.get('input[type="text"]').type('Перший користувач');
        cy.get('textarea').type('Відгук з 3 зірками');
        cy.get('[data-testid="star-3"]').click();
        cy.get('button').contains('Відправити ваш відгук').click();

        cy.get('input[type="text"]').type('Другий користувач');
        cy.get('textarea').type('Відгук з 5 зірками');
        cy.get('[data-testid="star-5"]').click();
        cy.get('button').contains('Відправити ваш відгук').click();

        cy.contains('Середній рейтинг: 4.0 ★').should('be.visible');
    });
});

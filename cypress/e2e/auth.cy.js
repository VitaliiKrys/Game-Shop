describe('Header Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1005');
    });

    it('should render the Game Shop title', () => {
        cy.get('h1').contains('Game Shop').should('be.visible');
    });

    it('should render all links correctly', () => {
        cy.get('a').contains('Home').should('have.attr', 'href', '/');
        cy.get('a').contains('Cart').should('have.attr', 'href', '/Cart');
        cy.get('a').contains('Information').should('have.attr', 'href', '/Information');
    });

    it('should load the images correctly', () => {
        cy.get('img[src="/Pictures/busket.png"]').should('be.visible');
        cy.get('img[src="/Pictures/ico.png"]').should('be.visible');
        cy.get('img[src="/Pictures/nintendo.png"]').should('be.visible');
        cy.get('img[src="/Pictures/profileWhite.png"]').should('be.visible');
    });

    it('should navigate to Cart page when clicking on the Cart icon', () => {
        cy.get('a[href="/Cart"] img').click();
        cy.url().should('include', '/Cart');
    });

    it('should navigate to Information page when clicking on the Profile icon', () => {
        cy.get('a[href="/Information"] img').click();
        cy.url().should('include', '/Information');
    });
});

describe('Footer Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1005');
    });

    it('should render all informational links correctly', () => {
        cy.get('a').contains('Інформація').should('have.attr', 'href', '/Info');
        cy.get('a').contains('Оплата та доставка').should('have.attr', 'href', '/Info');
        cy.get('a').contains('Обмін та повернення').should('have.attr', 'href', '/Info');
        cy.get('a').contains('Бонусні жетони').should('have.attr', 'href', '/Info');
        cy.get('a').contains('Відгуки').should('have.attr', 'href', '/Reviews');
    });

    it('should render all popular links correctly', () => {
        cy.get('a').contains('PlayStation').should('have.attr', 'href', '/ProductPs');
        cy.get('a').contains('Xbox').should('have.attr', 'href', '/ProductXb');
        cy.get('a').contains('Nintendo Switch').should('have.attr', 'href', '/ProductNs');
    });

    it('should render the address correctly', () => {
        cy.get('h2').contains('Ужгород вулиця Загорська , 89').should('be.visible');
    });

    it('should display social media icons', () => {
        cy.get('img[src="/Pictures/instagram.png"]').should('be.visible');
        cy.get('img[src="/Pictures/telegram.png"]').should('be.visible');
        cy.get('img[src="/Pictures/x.png"]').should('be.visible');
    });

    it('should navigate to the correct links when clicking on them', () => {
        cy.get('a[href="/Info"]').first().click();
        cy.url().should('include', '/Info');

        cy.get('a[href="/Reviews"]').first().click();
        cy.url().should('include', '/Reviews');

        cy.get('a[href="/ProductPs"]').first().click();
        cy.url().should('include', '/ProductPs');
    });
});

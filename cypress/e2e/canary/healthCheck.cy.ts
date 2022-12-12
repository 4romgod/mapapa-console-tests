describe('healthCheck page', () => {
    before(() => {
        cy.visit('/healthCheck');
    });

    it('should load healthCheck page correctly', () => {
        cy.get('[data-testid="health-check-title"]').should('be.visible');
    });
});
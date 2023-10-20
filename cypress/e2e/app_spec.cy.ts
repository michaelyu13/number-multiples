let portNumber = '5173';
let appUrl = `http://localhost:${portNumber}/number-multiples/`;

describe('template spec', () => {
    it('Check initial page render is correct', () => {
        cy.visit(appUrl);

        // H1 Heading exist
        cy.get('h1')
            .contains(/^Number Multiples$/i)
            .should('exist');

        // There are 150 buttons
        cy.get('button').should('have.length', 150); // true

        // Button 1 exist
        cy.get('button').contains(/^1$/i).should('exist');

        // Button 150 exist
        cy.get('button').contains(/^150$/i).should('exist');

        // Button 0 does not exist
        cy.get('button').contains(/^0$/i).should('not.exist');

        // Button 151 does not exist
        cy.get('button').contains(/^151$/i).should('not.exist');

        // No button should be selected
        cy.get('.btn--selected').should('not.exist');

        // No button should be highlighted
        cy.get('.btn--highlighted').should('not.exist');
    });

    it('Selecting a button [10] and deslecting it works', () => {
        cy.visit(appUrl);

        // Select button 10
        cy.get('button').contains(/^10$/i).click();

        // Check button 10 is selected
        cy.get('button').contains(/^10$/i).should('have.class', 'btn--selected');

        // Check that some multiples of 10 [10, 20, 140, 150] are highlighted
        cy.get('button').contains(/^10$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^20$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^140$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^150$/i).should('have.class', 'btn--highlighted');

        // Check that non mulitples of 10 [1, 2, 3, 4] are not highlighted
        cy.get('button').contains(/^1$/i).should('not.have.class', 'btn--highlighted');
        cy.get('button').contains(/^2$/i).should('not.have.class', 'btn--highlighted');
        cy.get('button').contains(/^3$/i).should('not.have.class', 'btn--highlighted');
        cy.get('button').contains(/^4$/i).should('not.have.class', 'btn--highlighted');

        // Select button 10
        cy.get('button').contains(/^10$/i).click();

        // No button should be selected
        cy.get('.btn--selected').should('not.exist');

        // No button should be highlighted
        cy.get('.btn--highlighted').should('not.exist');
    });

    it('Selecting a button [10] and then selecting another button [8] works', () => {
        cy.visit(appUrl);

        // Select button 10
        cy.get('button').contains(/^10$/i).click();

        // Check button 10 is selected
        cy.get('button').contains(/^10$/i).should('have.class', 'btn--selected');

        // Check that some multiples of 10 [10, 20, 140, 150] are highlighted
        cy.get('button').contains(/^10$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^20$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^140$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^150$/i).should('have.class', 'btn--highlighted');

        // Select button 8
        cy.get('button').contains(/^8$/i).click();

        // Check button 8 is selected
        cy.get('button').contains(/^8$/i).should('have.class', 'btn--selected');

        // Check that some multiples of 8 [8, 16, 24, 32] are highlighted
        cy.get('button').contains(/^8$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^16$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^24$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^32$/i).should('have.class', 'btn--highlighted');

        // Check button 10 is no longer selected
        cy.get('button').contains(/^10$/i).should('not.have.class', 'btn--selected');

        // Check that previous mulitples of 10 are no longer highlighted
        cy.get('button').contains(/^10$/i).should('not.have.class', 'btn--highlighted');
        cy.get('button').contains(/^20$/i).should('not.have.class', 'btn--highlighted');
        cy.get('button').contains(/^140$/i).should('not.have.class', 'btn--highlighted');
        cy.get('button').contains(/^150$/i).should('not.have.class', 'btn--highlighted');

        // Select button 8
        cy.get('button').contains(/^8$/i).click();

        // No button should be selected
        cy.get('.btn--selected').should('not.exist');

        // No button should be highlighted
        cy.get('.btn--highlighted').should('not.exist');
    });

    it('Selecting a button [10] and then selecting a highlighted button [40] that is a multiple works', () => {
        cy.visit(appUrl);

        // Select button 10
        cy.get('button').contains(/^10$/i).click();

        // Check button 10 is selected
        cy.get('button').contains(/^10$/i).should('have.class', 'btn--selected');

        // Check that some multiples of 10 [10, 20, 140, 150] are highlighted
        cy.get('button').contains(/^10$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^20$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^140$/i).should('have.class', 'btn--highlighted');
        cy.get('button').contains(/^150$/i).should('have.class', 'btn--highlighted');

        // Select button 50
        cy.get('button').contains(/^50$/i).click();

        // No button should be selected
        cy.get('.btn--selected').should('not.exist');

        // No button should be highlighted
        cy.get('.btn--highlighted').should('not.exist');
    });
});

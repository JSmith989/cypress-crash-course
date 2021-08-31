/// <reference types="cypress" />

describe('habit dashboard', () => {
  beforeEach(() => {
    cy.visit('/habits');
  });

  it('should display modal when add button clicked', () => {
    // find the add button and click it to open modal
    cy.contains('button', 'Add').click();

    // this should be visible
    cy.contains('Add a new habit').should('be.visible');
  });

  it('should display habit card when new habit is added', () => {
    cy.get('#habit-add-btn').click();
    cy.get("input[placeholder='Habit']").type('Drink a cup of water');
    cy.contains('Save Changes').click();
    cy.contains('Drink a cup of water').should('be.visible');
  });
});

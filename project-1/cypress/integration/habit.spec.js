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
    cy.contains('Drink a cup of water')
      .should('be.visible')
      .and('have.class', 'HabitCard__habit-container');
  });

  it('should toggle icon when habit card is clicked', () => {
    cy.get('#habit-add-btn').click();
    cy.get("input[placeholder='Habit']").type('Drink a cup of water');
    cy.contains('Save Changes').click();
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should('be.visible');
    cy.contains('Drink a cup of water').click();
    cy.get("[src='/static/media/check.9e8832df.svg']").should('be.visible');
  });
});

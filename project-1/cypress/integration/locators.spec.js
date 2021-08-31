/// <reference types="cypress" />

// this describe block can also be called context
// this takes in a title - string, and a function where tests will be configured
// this is called locators because this test locates specific elements
describe('Locators', () => {
  // before each test we need to go to the elements page to test the buttons
  // that are on that page
  beforeEach(() => {
    // setting baseUrl in cypress.json automatically adds to beginning here
    cy.visit('/elements');
  });

  // to run tests use it() with a string and then the configuration
  it('locating elements with get', () => {
    // get all of elements by tag name
    cy.get('button');

    // get all elements by className
    cy.get('.btn-with-class');

    // get all elements with specific classes, be careful with spaces at the end maybe
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");
    cy.get("[class='Elements-btn btn-with-class']");

    // get all elements by id
    cy.get('#btn-with-id');

    // get all elements by specific attribute
    cy.get("[type='submit']");

    // get all buttons with specific tagname AND class
    cy.get('button.Elements-btn');

    // get all elements by tag name AND class AND id
    cy.get('button.Elements-btn#btn-with-id');

    // get all elements by tag name AND class And type attribute
    cy.get("button.Elements-btn[type='submit']");

    /// get all elements with specific data test id
    cy.get("[data-cy='btn-id-1']");
    // instead of the above command, you can make your own in support/commands like below
    cy.getByTestId('btn-id-1');
  });

  it('locating elements with contains', () => {
    // get elements by text
    cy.contains('Unique Text');

    // get element by text not unique only gets first element even though not unique
    cy.contains('Not Unique Text');

    // with selector
    cy.contains("[type='submit']", 'Not Unique Text');

    // get the form and find the one with "not unique text" inside of form
    cy.contains('form', 'Not Unique Text');

    cy.get("[type='submit']").contains('Not Unique Text');
  });

  it('locating elements with find', () => {
    cy.get('#form-1').find('.btn-1');
    cy.get('#form-1').find('.btn-2');
  });
});

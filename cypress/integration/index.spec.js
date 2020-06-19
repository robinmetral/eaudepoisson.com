context("Homepage", () => {
  beforeEach(() => {
    cy.visit(`/`);
    cy.waitForRouteChange();
  });

  xit("should have a title", () => {
    cy.findByText("Gatsby Default Starter").should("exist");
  });

  it("should navigate to about page", () => {
    cy.findByText("À propos").click();
    cy.url().should("include", "a-propos");
  });
});

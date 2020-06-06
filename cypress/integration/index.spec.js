context("Homepage", () => {
  beforeEach(() => {
    cy.visit(`/`);
    cy.waitForRouteChange();
  });

  xit("should have a title", () => {
    cy.findByText("Gatsby Default Starter").should("exist");
  });

  it("should navigate to blog", () => {
    cy.findByText("Tous les articles").click();
    cy.url().should("include", "blog");
  });
});

context("Homepage", () => {
  beforeEach(() => {
    cy.visit(`/`)
    cy.waitForRouteChange()
  })

  xit("should have a title", () => {
    cy.findByText("Gatsby Default Starter").should("exist")
  })

  it("should navigate", () => {
    // click the link
    cy.findByText("Vietnam : deux semaines avant").click()

    // should be the right url
    cy.url().should("include", "vietnam-deux-semaines-avant")
  })
})

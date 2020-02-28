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
    cy.findByText("La machine à pâte 🍝").click()

    // should be the right url
    cy.url().should("include", "la-machine-a-pate")
  })
})

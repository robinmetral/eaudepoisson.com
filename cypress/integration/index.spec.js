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
    cy.findByText("Example post").click()

    // should be the right url
    cy.url().should("include", "/page-2")
  })
})

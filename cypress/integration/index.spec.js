context("Homepage", () => {
  beforeEach(() => {
    cy.visit(`/`)
    cy.waitForRouteChange()
  })

  it("should have a title", () => {
    cy.findByText("Gatsby Default Starter").should("exist")
  })

  it("should navigate", () => {
    // click the link
    cy.findByText("Go to page 2").click()

    // should be the right url
    cy.url().should("include", "/page-2")
  })
})

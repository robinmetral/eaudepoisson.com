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
    cy.url().should(
      "include",
      "/2018-12-18-de-vientiane-a-bangkok-par-rail-et-route/"
    )
  })
})

describe("Profile Page Tests", () => {
  it("successfully loads the user's profile data", () => {
    cy.visit("/profile"); // Ajustez l'URL selon votre configuration
    cy.get('img[alt="Profile"]').should("be.visible");
    cy.contains("Jane Doe"); // Assurez-vous que ce nom correspond à celui dans vos données de test
  });
});
it("allows editing the profile and updates the displayed information", () => {
  cy.visit("/profile");
  cy.contains("Edit").click();
  cy.get('input[name="name"]').clear().type("John Doe Updated");
  cy.get("button").contains("Save").click();
  cy.contains("John Doe Updated");
});
it("displays validation messages for invalid inputs", () => {
  cy.visit("/profile");
  cy.contains("Edit").click();
  cy.get('input[name="email"]').clear().type("invalidemail");
  cy.get("button").contains("Save").click();
  cy.contains("Please enter a valid name and email.");
});
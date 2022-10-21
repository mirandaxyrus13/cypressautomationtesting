/// <reference types="Cypress"/>

describe("My Sixth Test Suite", function(){

    it("My First Test Case", function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
       
        cy.get("div.mouse-hover-content").invoke("show");
        cy.contains("Top").click()
        cy.url().should("include", "top");


        // forcing the hiddent button to be clicked
        // cy.get("div.mouse-hover-content").invoke("show");
        // cy.contains("Top").click({force: true});
        // cy.url().should("include", "top");
        
      

    });

});

/// <reference types="Cypress"/>

describe("My Eight Test Suite", function(){

    it("My First Test Case", function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.wait(3000)
        cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
        

    });

});

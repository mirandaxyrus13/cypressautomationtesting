/// <reference types="Cypress"/>

describe("My Fourth Test Suite", function(){

    it("My Fourth Test Case", function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //Alert Box
        cy.get("input#alertbtn").click();
        cy.get("[value='Confirm']").click();
        
        //window:alert
        cy.on("window:alert", (str) => {
            //Mocha
            expect(str).to.equal("Hello , share this practice page and share your knowledge");
        });

        //window:confirm
        cy.on("window:confirm", (str) => {
            //Mocha
            expect(str).to.equal("Hello , Are you sure you want to confirm?");
        });

        //opening tabs
        cy.get("a#opentab").invoke("removeAttr", "target").click();
        cy.url().should("include", "rahulshettyacademy");
        cy.wait(3000);
        cy.go("back");


    });

});

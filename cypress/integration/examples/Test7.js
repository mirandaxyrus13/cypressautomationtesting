/// <reference types="Cypress"/>

describe("My Seventh Test Suite", function(){

    it("My First Test Case", function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("#opentab").then(function(el){

            const url = el.prop("href");
            cy.log(url);
            cy.visit(url);

        });

        // cy.get("a#opentab").invoke("removeAttr", "target").click();
        
      

    });

});

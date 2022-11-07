/// <reference types="Cypress"/>

describe("My First Test Suite", function(){

    it("My First Test Case", function(){
        //test steps
        // cy.visit(Cypress.env("url"));
        cy.visit(Cypress.env("url") + "/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);

        // cy.get(".product").should("have.length", 5);
        // cy.get(".product:visible").should("have.length", 4);

        //Parent child
        cy.get(".products").as("productlocator");
        cy.get("@productlocator").find(".product").should("have.length", 4);

        //to resolve a promise
        cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click().then(function(){
            console.log("XYRUS");
        })

        cy.get("@productlocator").find(".product").each(($el, index, $list) => {
 
            const product_name = $el.find("h4.product-name").text();

            if(product_name.includes("Cashews")){
               cy.wrap($el).find("button").click();
            }else{

            }

        });

        //assert if logo text is displayed correctly
        cy.get('.brand').should("have.text", "GREENKART");


        // to print in cypress runner logs
        cy.get(".brand").then(function(logoelement){
            cy.log(logoelement.text());
            
        })





    });

});

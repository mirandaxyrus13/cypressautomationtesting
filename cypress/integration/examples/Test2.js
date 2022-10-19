/// <reference types="Cypress"/>

describe("My Second Test Suite", function(){

    it("My Second Test Case", function(){
        //test steps
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);

        //Parent child
        cy.get(".products").as("productlocator");
        cy.get("@productlocator").find(".product").should("have.length", 4);

        cy.get("@productlocator").find(".product").each(($el, index, $list) => {
            const product_name = $el.find("h4.product-name").text();
            
            // if(product_name.includes("Cashews")){
            //    cy.wrap($el).find("button").click();
            // }else{
            // }

            let items = ["Cashews", "Carrot"];
            let itemsLength = items.length;

            for(let i = 0; i <= itemsLength; i++){
                if(product_name.includes(items[i])){
                    cy.wrap($el).find("button").click();
                 }else{
     
                 }
            }

        });

        cy.get('.cart-icon > img').click();

        cy.get(".cart-items").as("cartitemslocator");
        cy.get("@cartitemslocator").find(".cart-item").each(($el, index, $list) => {
            const product_name = $el.find("p.product-name").text();
            
            let items = ["Cashews", "Carrot"];
            let itemsLength = items.length;

            for(let i = 0; i <= itemsLength; i++){
                if(product_name.includes(items[i])){
                    cy.log(items[i])
                    // cy.wrap($el).should("have.text", items[i]);
                    expect($el.first()).to.contain(items[i])

                 }else{
     
                 }
            }

        });

        cy.contains("PROCEED TO CHECKOUT").click();
        cy.wait(2000);
        cy.contains("Place Order").click();







    });

});

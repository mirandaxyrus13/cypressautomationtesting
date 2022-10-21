/// <reference types="Cypress"/>

describe("My Fifth Test Suite", function(){

    it("My First Test Case", function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        


        // table#product[name='courses'] tr td:nth-child(2)
        // tr td:nth-child(2)
        
        // identify the specific column via a CSS path
        cy.get("table#product[name='courses'] tr td:nth-child(2)").each(($el, index, $list) => {
        
            const text = $el.text();

            // if the row includes the expected text value, cypress will move 
            // to the next element based on the current row element 
            if(text.includes("Python Language")){

                // cy.wrap($el).eq(index).next();
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                    const priceText = price.text();
                    expect(priceText).to.equal("25");
                });
                
            }
         

        });
      

    });

});

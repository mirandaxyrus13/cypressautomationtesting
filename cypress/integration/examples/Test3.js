/// <reference types="Cypress"/>

describe("My Third Test Suite", function(){

    it("My First Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Checkboxes
        cy.get("input#checkBoxOption1").check().should("be.checked").and("have.value", "option1");
        cy.get("input#checkBoxOption1").uncheck().should("not.be.checked");
        cy.get("input[type='checkbox']").check(["option2", "option3"]);

        //Static Dropdowns
        cy.get("select#dropdown-class-example").select("option2").should("have.value", "option2");

        //Dynamic Dropdowns
        cy.get("#autocomplete").type("Ind");
        cy.get(".ui-menu-item div").each(($el, index, $list) => {

            if($el.text() === "India"){
                cy.wrap($el).click();
            }

        });
        cy.get("#autocomplete").should("have.value", "India");


        //Visible and invisible elements
        cy.get("input#displayed-text").should("be.visible");
        cy.get("input#hide-textbox").click();
        cy.get("input#displayed-text").should("not.be.visible");
        cy.get("input#show-textbox").click();
        cy.get("input#displayed-text").should("be.visible");

        //Radio buttons
        cy.get("input[value='radio2']").click().should("be.checked");

    });

});

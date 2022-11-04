/// <reference types="Cypress"/>

import HomePage from "../../support/page_objects/home_page";
import ProductsPage from "../../support/page_objects/products_page";
import CheckoutPage from "../../support/page_objects/checkout_page";

describe("Test Automation Suite", function(){

    before(function(){
        cy.fixture("testautomation_data").then(function(data){
            this.data = data;
        });
    });

    it("Automation Test Case 1", function(){
        const home_page = new HomePage();
        const products_page = new ProductsPage();
        const checkout_page = new CheckoutPage();

        cy.visit(Cypress.env("url") + "/angularpractice/");

        home_page.getNameTextBox().type(this.data.name);
        home_page.getEmailTextBox().type(this.data.email);
        home_page.getPasswordTextBox().type(this.data.password);
        home_page.getCheckboxCheck().check().should("be.checked");
        home_page.getGenderDropdown().select(this.data.gender);
        home_page.getEmployed().click().should("be.checked");
        home_page.getEntrepreneur().should("be.disabled");
        home_page.getTwoWayDataBinding().should("have.value", this.data.name);
        home_page.getNameTextBox().should("have.attr", "minlength", 2);
        
        // for debugging purposes, 
        // cy.pause();
        // .debug();

        home_page.getShopTab().click();

        this.data.product_name.forEach(function(products){
            cy.selectProduct(products);
        });

        products_page.getCheckoutButton().click();

        var totalPurchase = 0;
        
        cy.get("tr td:nth-child(4) strong").each(($element, index, $list) => {
            var totalText = $element.text();
            var total = totalText.split(" ");
            total = total[1].trim();
            cy.log(total);
            totalPurchase = Number(totalPurchase) + Number(total);
        }).then(function(){
            cy.log(totalPurchase);
        });

        cy.get("h3 strong").then(function(element){
            var amountText = element.text();
            var totalAmount = amountText.split(" ");
            totalAmount = Number(totalAmount[1].trim());
            expect(totalAmount).to.equal(totalPurchase);
        });

        checkout_page.getCheckouttButton().click();
        checkout_page.getCountryTextbox().type(this.data.country);
        Cypress.config("defaultCommandTimeout", 9000);
        checkout_page.getCountrySuggestion().click();
        checkout_page.getIAgreeCheckbox().click({force: true});
        checkout_page.getPurchaseButton().click();
        checkout_page.getSuccessAlert().should("include.text", this.data.alertMessage);
        checkout_page.getSuccessAlert().then(function(element){
            const actualText = element.text();
            expect(actualText.includes(this.data.alertMessage)).to.be.true;
        });










      

    });

});

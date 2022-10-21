/// <reference types="Cypress"/>

describe("Test Automation Suite", function(){

    before(function(){
        cy.fixture("testautomation_data").then(function(data){
            this.data = data;
        });
    });

    it("Automation Test Case 1", function(){


        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        cy.get("div.form-group label + input[name='name']").type(this.data.name);
        cy.get("div.form-group label + input[name='email']").type(this.data.email);
        cy.get("div.form-group label + input[type='password']").type(this.data.password);
        
      

    });

});

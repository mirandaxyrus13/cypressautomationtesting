class CheckoutPage{

    getCheckouttButton(){
        return cy.get("button[class='btn btn-success']");
    }

    getCountryTextbox(){
        return cy.get("label[for='country'] + input");
    }

    getCountrySuggestion(){
        return cy.get(".suggestions > ul > li > a");
    }

    getIAgreeCheckbox(){
        return cy.get("#checkbox2");
    }

    getPurchaseButton(){
        return cy.get("input[type='submit']");
    }

    getSuccessAlert(){
        return cy.get(".alert.alert-success.alert-dismissible");
    }

}

export default CheckoutPage;
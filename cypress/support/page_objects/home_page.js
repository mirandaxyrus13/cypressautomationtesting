class HomePage{

    getNameTextBox(){
        return cy.get("div.form-group label + input[name='name']");
    }

    getEmailTextBox(){
        return cy.get("div.form-group label + input[name='email']");
    }

    getPasswordTextBox(){
        return cy.get("div.form-group label + input[type='password']");
    }

    getCheckboxCheck(){
        return cy.get("input#exampleCheck1");
    }

    getGenderDropdown(){
        return cy.get("label[for='exampleFormControlSelect1'] + select.form-control")
    }

    getStudent(){
        return cy.get("input#inlineRadio1");
    }

    getEmployed(){
        return cy.get("input#inlineRadio2");
    }

    getEntrepreneur(){
        return cy.get("input#inlineRadio3");
    }

    getTwoWayDataBinding(){
        return cy.get(":nth-child(4) > .ng-untouched");
    }


    getShopTab(){
        return cy.get(":nth-child(2) > .nav-link");
    }

}

export default HomePage;
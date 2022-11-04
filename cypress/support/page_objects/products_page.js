class ProductsPage{

    getCheckoutButton(){
        return cy.get("ul li a[class='nav-link btn btn-primary']");
    }

}

export default ProductsPage;
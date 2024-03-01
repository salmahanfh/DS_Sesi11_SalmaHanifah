const { $ } = require('@wdio/globals')
const Page = require('./page');

const element = {
    iconCart: $('.shopping_cart_link'),
    btnAddToCart: $('#add-to-cart-sauce-labs-backpack'),
    iconCartBadge: $('.shopping_cart_badge'),
}

class HomePage extends Page {

    //for validate homepage
    async validateHomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html');
        expect(element.iconCart).toBeDisplayed();
    }

    //for click the Add to Cart button 
    async clickAddCart() {
        await element.btnAddToCart.click();
    }

    //for validate product added to cart (view from homepage)
    async validateAddToCart() {
        expect(browser).toHaveUrlContaining('/inventory.html');
        expect(element.iconCartBadge).toBeDisplayed();
    }

    //for click the icon cart to open cart page
    async cart() {
        await element.iconCart.click();
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports =  new HomePage();

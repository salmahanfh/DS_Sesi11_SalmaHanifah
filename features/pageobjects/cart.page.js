const { $ } = require('@wdio/globals')
const Page = require('./page');

const element = {
    titleCart: $('.title'),
    btnCheckout: $('#checkout')
}

class CartPage extends Page {

    async validateCartPage() {
        expect(browser).toHaveUrlContaining('/cart.html')
        expect(element.titleCart).toBeDisplayed();
    }

    async payment() {
        await element.btnCheckout.click();
    }

    open () {
        return super.open('/cart.html');
    }
}

module.exports = new CartPage();
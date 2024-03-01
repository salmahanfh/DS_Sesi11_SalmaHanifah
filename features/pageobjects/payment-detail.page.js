const { $ } = require('@wdio/globals')
const Page = require('./page');

const element = {
    titleQTY: $('.cart_quantity_label')
}

class PaymentDetailPage extends Page {

    async validatePaymentDetailPage() {
        expect(browser).toHaveUrlContaining('/checkout-step-two.html')
        expect(element.titleQTY).toBeDisplayed();
    }

    open () {
        return super.open('/checkout-step-two.html');
    }
}

module.exports = new PaymentDetailPage();
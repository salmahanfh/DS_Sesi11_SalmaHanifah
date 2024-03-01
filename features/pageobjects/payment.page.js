const { $ } = require('@wdio/globals')
const Page = require('./page');

const element = {
    titlePayment: $('.title'),
    firstname: $('#first-name'),
    lastname: $('#last-name'),
    zipcode: $('#postal-code'),
    btnContinue: $('#continue')
}

class PaymentPage extends Page {

    async validatePaymentPage() {
        expect(browser).toHaveUrlContaining('/checkout-step-one.html')
        expect(element.titlePayment).toBeDisplayed();
    }

    async paymentField (firstname, lastname, zipcode) {
        await element.firstname.waitForDisplayed({ timeout: 2500 });
        await element.firstname.setValue(firstname);
        await element.lastname.setValue(lastname);
        await element.zipcode.setValue(zipcode);
        await element.btnContinue.click();
    }

    open () {
        return super.open('/checkout-step-one.html');
    }
}

module.exports = new PaymentPage();
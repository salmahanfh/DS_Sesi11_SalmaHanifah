const { Given, When, Then, And } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');
const CartPage = require('../pageobjects/cart.page.js');
const PaymentPage = require('../pageobjects/payment.page.js');
const PaymentDetailPage = require('../pageobjects/payment-detail.page.js');

Given(/^Salma is on the login page$/, async () => {
    await LoginPage.open();
});

When(/^Salma login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username);
});

Then(/^Salma should see home page$/, async () => {
    await HomePage.validateHomePage();
});

Then(/^Salma should see error "(.*)"$/, async (message) => {
    await LoginPage.validateLockedOutUserError(message);
});

When(/^Salma click on add to cart$/, async () => {
    await HomePage.cart();
});

Then(/^Salma should see the product is added to cart$/, async () => {
    await HomePage.validateAddToCart();
});

When(/^Salma click on icon chart$/, async () => {
    await HomePage.cart();
});

Then(/^Salma should see cart page$/, async () => {
    await CartPage.validateCartPage();
});

When(/^Salma click on button checkout$/, async () => {
    await CartPage.payment();
});

Then(/^Salma should see payment checkout page$/, async () => {
    await PaymentPage.validatePaymentPage();
});

When(/^Salma fill payment field with "(.*)" and "(.*)" and "(.*)" credential$/, async (firstname, lastname, zipcode) => {
    await PaymentPage.paymentField(firstname, lastname, zipcode);
});

Then(/^Salma should see payment detail page$/, async () => {
    await PaymentDetailPage.validatePaymentDetailPage();
});

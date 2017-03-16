// Go to newegg.com and add something to the cart
// Click the paypal button and get the token out of the URL.
// Add the token in the payment callback.
// Go back to newegg.com cart page place this script in the console hit enter.
// Click the button.

var payPalScriptTag = document.createElement("script");
payPalScriptTag.type = "text/javascript";
payPalScriptTag.src = "//www.paypalobjects.com/api/checkout.js";
payPalScriptTag.onload = paypalCheckoutReady;
document.head.appendChild(payPalScriptTag);

// Remove old paypal button
var oldButton = document.getElementsByClassName('PayPalBtn')[0];
oldButton.innerHTML = '';

var paypalSetup = false;
function paypalCheckoutReady() {
    if (!paypalSetup) {
        paypalSetup = true;
        paypal.Button.render({
            env: 'production',
            onCancel: function (data, actions) {
                return actions.redirect();
            },
            onError: function () {

            },
            payment: function () {
                // Return the EC token from the merchants site
                return 'EC-9A789748PK7280724';
            },
            onAuthorize: function (data, actions) {
                return actions.redirect();
            }
        }, oldButton);
    }
}

export default function (router) {
    router.get('/', (req, res) => {
        
        let paypal = req.app.kraken.get('paypalClassic');

        let nvpParams = {
            RETURNURL: 'http://localhost',
            CANCELURL: 'http://localhost',
            PAYMENTREQUEST_0_AMT: '100.00'
        };
            
        paypal.call('SetExpressCheckout', nvpParams, (err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }

        });
    });
}
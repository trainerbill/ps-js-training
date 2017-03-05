export default function (router) {
    router.post('/', (req, res) => {
        
        let paypal = req.app.kraken.get('paypalClassic');

        let nvpParams = {
            TOKEN: req.body.TOKEN,
            PAYERID: req.body.PAYERID,
            AMT: '100',
            PAYMENTACTION: req.body.PAYMENTACTION
        };
            
        paypal.call('DoExpressCheckoutPayment', nvpParams, (err, response) => {
            if (err) {
                res.json(err);
            } else {
                res.json(response);
            }

        });
    });
}
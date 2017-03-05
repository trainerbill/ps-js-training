export default function (router) {
    router.get('/:token', (req, res) => {
        
        let paypal = req.app.kraken.get('paypalClassic');

        let nvpParams = {
            TOKEN: req.params.token,
        };
            
        paypal.call('GetExpressCheckoutDetails', nvpParams, (err, response) => {
            if (err) {
                res.json(err);
            } else {
                res.json(response);
            }

        });
    });
}
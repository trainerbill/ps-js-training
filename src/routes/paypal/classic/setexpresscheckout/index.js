export default function (router) {
    router.get('/', (req, res) => {
        
        let paypal = req.app.kraken.get('paypalClassic');
        let c9config = req.app.kraken.get('cloud9');

        let nvpParams = {
            RETURNURL: 'https://' + c9config.workspace + '-' + c9config.username + '.c9users.io/misc/returnurl.html',
            CANCELURL: 'https://' + c9config.workspace + '-' + c9config.username + '.c9users.io/misc/cancelurl.html',
            PAYMENTREQUEST_0_AMT: '100.00'
        };
            
        paypal.call('SetExpressCheckout', nvpParams, (err, response) => {
            if (err) {
                res.json(err);
            } else {
                res.json(response);
            }

        });
    });
}
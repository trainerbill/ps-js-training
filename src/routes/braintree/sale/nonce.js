export default function (router) {
    router.post('/', (req, res) => {

        let btGateway = req.app.kraken.get('btGateway');

        console.log(req.body);

        btGateway.transaction.sale({
            amount: req.body.amount,
            paymentMethodNonce: req.body.nonce
        }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });
}
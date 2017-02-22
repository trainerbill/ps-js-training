export default function (router) {
    router.get('/', (req, res) => {
        
        let btGateway = req.app.kraken.get('btGateway');
        
        btGateway.transaction.sale({
            amount: '10.00',
            paymentMethodNonce: 'fake-valid-nonce'
        }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });
}
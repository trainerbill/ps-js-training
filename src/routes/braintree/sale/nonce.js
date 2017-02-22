export default function (router) {
    router.get('/', (req, res) => {
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
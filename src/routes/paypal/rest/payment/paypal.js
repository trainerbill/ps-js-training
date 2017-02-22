var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://return.url",
        "cancel_url": "http://cancel.url"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};

export default function (router) {
    router.get('/', (req, res) => {
        
        let paypal = req.app.kraken.get('paypalRest');
            
        paypal.payment.create(create_payment_json, function (err, payment) {
            if (err) {
                res.send(err);
            } else {
                res.send(payment);
            }
        });
    });
}



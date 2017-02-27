export default function (router) {
    
    router.post('/', (req, res) => {
        
        res.send('Logged in as ' + req.body.email);
           
    });
}

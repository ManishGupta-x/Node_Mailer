const express = require('express');
const app = express();

const sendMail = require('./controllers/sendMail');
app.get('/', (req, res) => {
    res.send('Hello World!');
});
    
app.get("/mail", sendMail)
const start = async () => {
    try {
       app.listen(3000, () => {
            
            console.log('Server listening on port 3000!');
        });
        
    } catch (err) {
        console.error(err);
    }
}

start();
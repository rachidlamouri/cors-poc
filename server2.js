const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3080');
    res.set('Access-Control-Allow-Methods', 'PUT');
    next();
})

app.use(express.static('public2'));

app.post('/data', (req, res) => {
    res.json({
        message: 'post response',
    });

    res.end();
})

app.put('/data', (req, res) => {
    res.json({
        message: 'put response',
    });

    res.end();
})

const port = 8080;
app.listen(port, () => {
    console.log(`Listening on "${port}"`);
})

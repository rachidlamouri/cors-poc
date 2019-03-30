const express = require('express');
const app = express();

app.use(express.static('public1'));

const port = 3080;
app.listen(port, () => {
    console.log(`Listening on "${port}"`);
})

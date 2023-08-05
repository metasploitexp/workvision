const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3333;

app.listen(async () => {
    console.log(`Listen in a port ${PORT}..`);
})


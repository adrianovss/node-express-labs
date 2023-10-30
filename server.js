const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${PORT}`)
});
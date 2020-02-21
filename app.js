const express = require("express");
const app = express();

app.use('/', require('./route'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`captcha-api listening on ${port}!`));

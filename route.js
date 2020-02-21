const express = require('express');
const captcha = require("./captcha");
const router = express.Router();

// Human checkable test path, returns image for browser
router.get("/test/:width?/:height?/", (req, res) => {
    const width = parseInt(req.params.width) || 200;
    const height = parseInt(req.params.height) || 100;
    const { image } = captcha(width, height);
    res.send(`<img class="generated-captcha" src="${image}">`);
  //   console.log(image);
  });
  
  // Captcha generation, returns PNG data URL and validation text
  router.get("/captcha/:width?/:height?/", (req, res) => {
    const width = parseInt(req.params.width) || 200;
    const height = parseInt(req.params.height) || 100;
    const { image, text } = captcha(width, height);
    res.send({ image, text });
    console.log(text);
  });

module.exports = router
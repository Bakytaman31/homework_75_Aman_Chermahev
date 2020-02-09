const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const router = express.Router();

router.post('/decode', (req, res) => {
    const decode = {encoded: Vigenere.Decipher(req.body.password).crypt(req.body.decoded)};
    res.send(decode);
});

router.post('/encode', (req, res) => {
    const encode = {decoded: Vigenere.Cipher(req.body.password).crypt(req.body.encoded)};
    res.send(encode);
});

module.exports = router;
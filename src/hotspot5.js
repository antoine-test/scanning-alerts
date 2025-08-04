// === Server side ===
const crypto = require("crypto");
const cipher = crypto.createCipher(algo, key); // Sensitive
const cipheriv = crypto.createCipheriv(algo, key, iv); // Sensitive
const decipher = crypto.createDecipher(algo, key); // Sensitive
const decipheriv = crypto.createDecipheriv(algo, key, iv); // Sensitive
const pubEnc = crypto.publicEncrypt(key, buf); // Sensitive
const privDec = crypto.privateDecrypt({ key: key, passphrase: secret }, pubEnc); // Sensitive
const privEnc = crypto.privateEncrypt({ key: key, passphrase: secret }, buf); // Sensitive
const pubDec = crypto.publicDecrypt(key, privEnc); // Sensitive

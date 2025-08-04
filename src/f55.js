const Formidable = require('formidable');

const form          = new Formidable(); // Noncompliant
form.uploadDir      = "/tmp/";
form.keepExtensions = true;


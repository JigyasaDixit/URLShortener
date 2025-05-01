const router = require('express').Router();
const { createShortURL, getShortIdUrl } = require("../controllers/URL");

router.post("/", createShortURL)

router.get("/:shortId",getShortIdUrl)

module.exports =  router ;

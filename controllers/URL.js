const shortId = require('shortid');
const URL=require("../models/URLSchema");
const { timeStamp } = require('console');

async function createShortURL(req,res) {
    if (!req.body.url) return res.status(401).json({ msg: "URL is required!!" })
    await URL.create({
        shortId: shortId.generate(),
        reDirectURL: req.body.url,
        visitHistory:[]
    });
    return res.json({id:shortId})
}

async function getShortIdUrl(req, res) {
    const shortId = req.params.shortId;
    console.log("shortId"+shortId)
    const entry = await URL.findOneAndUpdate({shortId}, {
        $push:
        {
            visitHistory:
            {
                timeStamp: Date.now()
                    
            }
        }
    })
    console.log(entry.reDirectURL);
     res.redirect(entry.reDirectURL);
}
module.exports = { createShortURL, getShortIdUrl };
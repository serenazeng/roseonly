var express = require('express');
var router = express.Router();
var {MongoClient,url,dbName}=require('./../mongodb.config');

router.get('/', function(req, res, next) {
    MongoClient.connect(url,function (err, client) {
        const db = client.db(dbName);
        const collection = db.collection("goods");

        collection.find({}).toArray(function (err,resx) {
            res.send(resx);
        })
    })
});

module.exports = router;

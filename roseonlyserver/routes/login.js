var express = require('express');
var router = express.Router();
var {MongoClient,url,dbName}=require('./../mongodb.config');

router.post('/', function(req, res, next) {
    MongoClient.connect(url,function (err, client) {
        const db = client.db(dbName);
        const collection = db.collection("imp");

        collection.find({'u':req.body.u,'p':req.body.p}).toArray(function (err,resx) {
            if (resx.length==0){
                res.send("no");
            }else {
                req.session.username=req.body.u;
                res.send(resx[0].bycar);

            }
        })
    })


});

module.exports = router;

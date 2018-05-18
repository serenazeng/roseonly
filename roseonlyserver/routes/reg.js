var express = require('express');
var router = express.Router();
var {MongoClient,url,dbName}=require('./../mongodb.config');

router.post('/', function(req, res, next) {

    console.log(req.body);

    MongoClient.connect(url,function (err,client) {
        const db = client.db(dbName);
        const collection = db.collection("imp");

        collection.find({'u':req.body.u}).toArray(function (err,resy) {
            if (resy.length==0){
                // 将用户信息存入imp集合
                var bycar = [];
                collection.insertOne({'u':req.body.u,'p':req.body.p,'bycar':bycar},function (err,resx) {
                    if (err) throw err;
                    console.log("文档插入成功");

                    res.send("ok");
                });
            }else {
                res.send("no");
            }
        })
    })
});

module.exports = router;
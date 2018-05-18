var express = require('express');
var router = express.Router();
var {MongoClient,url,dbName}=require('./../mongodb.config');

router.post('/', function(req, res, next) {

    console.log(req.body);

    MongoClient.connect(url,function (err, client) {
        const db = client.db(dbName);
        const collection = db.collection("imp");

        var whereStr = {"u":req.body.yhm};  // 查询条件
        var updateStr = {$set: { "bycar" : req.body.upimp}};

        collection.updateOne(whereStr, updateStr, function(err, resy) {
            if (err) throw err;
            console.log("文档更新成功");
            res.end();
        })
    })

});

module.exports = router;
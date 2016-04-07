var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/meet', function(req, res, next) {

    var url = "http://www.ownmeet.com";

    try {
        var webArr = new Array();
        webArr.push("http://timelineapp.pointstone.org/coreball/game.html");
        webArr.push("http://www.koalastothemax.com/");
        webArr.push("http://www.muchbetterthanthis.com/");
        webArr.push("http://www.staggeringbeauty.com/");
        webArr.push("http://thatsthefinger.com/");
        webArr.push("http://heeeeeeeey.com/");
        webArr.push("http://www.papertoilet.com/");
        webArr.push("http://heeeeeeeey.com/");
        webArr.push("http://www.ismycomputeron.com/");
        webArr.push("https://isitchristmas.com/");
        webArr.push("http://music.163.com/");
        webArr.push("http://www.douban.com/");
        webArr.push("http://www.ownmeet.com/");
        webArr.push("http://www.airpano.com/");
        webArr.push("http://www.zefrank.com/scribbler/scribblertoo/");
        webArr.push("http://drops.wooyun.org/tips/573");
        webArr.push("http://fediafedia.com/neo/");
        webArr.push("http://geektyper.com/");
        webArr.push("http://map.ipviking.com/");
        webArr.push("http://www.xnet.se/fd/");
        webArr.push("http://webdemo.myscript.com/");
        webArr.push("http://www.rainymood.com/");
        webArr.push("http://www.theunseenvideo.com/");
        webArr.push("http://dig.chouti.com/");
        webArr.push("http://www.mop.com");
        webArr.push("http://www.jianshu.com/");
        webArr.push("http://www.woshipm.com/");
        webArr.push("http://www.theuselessweb.com/");
        webArr.push("http://live.ipanda.com/");
        webArr.push("http://chatwithigod.com/");
        webArr.push("https://wuzhi.me/");
        webArr.push("http://www.topit.me/");
        webArr.push("http://meiriyiwen.com/");
        webArr.push("http://www.qiushibaike.com/");
        webArr.push("http://www.u148.net/");
        webArr.push("http://meiwei.me/");
        webArr.push("http://ear.duomi.com/");
        webArr.push("http://jandan.net/");
        webArr.push("http://lengxiaohua.com/");
        webArr.push("http://www.theunseenvideo.com/");
        webArr.push("http://www.xiankankan.com/");

        //随机取webId
        var webId = Math.round(Math.random() * webArr.length);
        if (webId > (webArr.length - 1)) {
            webId = webId - 1;
        }

        url = webArr[webId];

        // //保存visit记录
        // var file = "/data/logs/omVisit.log";
        // var date =new Date();
        // //获取可视时间
        // var strTime = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;
        // var visitLog = date.getTime() + " " + strTime +  + webId + " " + url + "\n";
        // fs.appendFile(file, visitLog, function(err) {
        //     if(err) throw err;
        // });

        var visitLogDao = require('../dao/visitLogDao');
        visitLogDao.add('no session', webId, url);


    } catch (e) {
        console.log(e);
    }

    res.redirect(url);

});

module.exports = router;

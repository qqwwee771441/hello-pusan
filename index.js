const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/weather", function(req,res){
    var request = require('request');
    var url = "http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst?serviceKey=kjLszswxlX2OEeKap8m32Ff%2FLr9hPE3a4hq0P7MsT%2Ba447GyJM%2FJI1Q92OrEnpyq90FR%2BeVcrgvG%2FbbVahx8jA%3D%3D&numOfRows=40&pageNo=1&dataType=JSON&nx=98&ny=77";

    var base_date = req.query.base_date;
    var base_time = req.query.base_time;
    url += "&base_date=" + base_date + "&base_time=" + base_time;

    var options = {
        'method': 'GET',
        'url': url,
        'headers': {
            'Cookie': 'JSESSIONID=vSsqt0QyzgtAD91WZx2wiIUB6wXi4q3uxNVO9aUsrgZk1Hwe4kzH87zEBIDr1PJw.amV1c19kb21haW4vbmV3c2t5Mw=='
        }
    };
    request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
    });
});

app.get("/publicArt", function(req,res){
    var request = require('request');

    var url = "http://apis.data.go.kr/6260000/PublicArt/getPublicArtInfo?serviceKey=kjLszswxlX2OEeKap8m32Ff%2FLr9hPE3a4hq0P7MsT%2Ba447GyJM%2FJI1Q92OrEnpyq90FR%2BeVcrgvG%2FbbVahx8jA%3D%3D&resultType=json";

    var numOfRows = req.query.numOfRows;
    var pageNo = req.query.pageNo;
    url += "&numOfRows=" + numOfRows + "&pageNo=" + pageNo;

    var options = {
        'method': 'GET',
        'url': url,
        'headers': {}
    };
    request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
    });
});

app.get("/restaurant", function(req,res){
    var request = require('request');

    var url = "http://apis.data.go.kr/6260000/BusanTblFnrstrnStusService/getTblFnrstrnStusInfo?serviceKey=kjLszswxlX2OEeKap8m32Ff%2FLr9hPE3a4hq0P7MsT%2Ba447GyJM%2FJI1Q92OrEnpyq90FR%2BeVcrgvG%2FbbVahx8jA%3D%3D&resultType=json"

    var numOfRows = req.query.numOfRows;
    var pageNo = req.query.pageNo;
    url += "&numOfRows=" + numOfRows + "&pageNo=" + pageNo;

    var options = {
        'method': 'GET',
        'url': url,
        'headers': {}
    };
    request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
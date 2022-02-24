const express =  require("express");
const https = require("https");
const bodyParser = require("bodyParser");
const app = express();

app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=862131ccdb72cead3fc4f88400bcd394";
 https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
        const wheatherDATA = JSON.parse(data);
        const temp = wheatherDATA.main.temp;
        const description = wheatherDATA.weather[0].description;
        const icon = wheatherDATA.weather[0].icon;
        const iconURL = "http://openwheathermap.org/img/wn/"+ icon +"@2x.png";
        res.write("<h1>the current wheather in london is "+temp+" degree celcius</h1>");
        res.write("the wheater is currently"+description);
        res.write(iconURL);
        res.send();
    })
 })

})



app.listen(3002,function(){
    console.log("server is running");
})
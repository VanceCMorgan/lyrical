var express = require('express');
var axios = require('axios');
var cors = require('cors');
var app =express();
const puppeteer = require('puppeteer');



//MIDDLEWARES
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


app.get('/scraper',async function (req,res){
  req.setTimeout(0);
   var pr = await scrapeProduct(req.query.url);
   console.log(pr);
   res.send(pr);
});

app.get('/',function(req,res){
    res.send("Not for You!");
});


async function scrapeProduct(url){
  try{
      const browser = await puppeteer.launch({timeout: 600000, devtools: false});
      console.log("browser opened"); 

      const page = await browser.newPage();
      console.log("page created");

      await page.goto(url, {waitUntil: 'load', timeout: 0});
      console.log("after page");

      const [el] = await page
      .$x('/html/body/routable-page/ng-outlet/song-page/div/div/div[2]/div[1]/div/defer-compile[1]/lyrics/div/div[2]/section/p');    
      const inner_html = await page.evaluate(() => document.querySelector('section').innerHTML);
      
      await browser.close();
      console.log("browser closed");

      return inner_html;
  }catch (error){
    console.log("--------- Caught Puppeteer Error --------");
    console.log(error);
    return "ERROR";
  }
  
  
  //  browser.close();
}
var server = app.listen(9000,function(){
  console.log("ready");
});
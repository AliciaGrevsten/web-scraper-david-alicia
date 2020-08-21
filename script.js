const axios = require("axios");
const cheerio = require("cheerio");
const sec = require("./sections");
const createjson = require("./jsonconvert");
const url = "https://www.bbc.com/news/world-africa-53520410";

axios.get(url).then((res) => {
  const $ = cheerio.load(res.data);

  //Scrapes and sets the values
  const artTitle = $(".story-body__h1").text().trim();
  const author = $(".byline__name").text().trim();
  const publisher = $(".byline__title").text().trim();
  const artBody = sec($);
  
  //Creates the json file
  createjson(artTitle, author, publisher, artBody);
});


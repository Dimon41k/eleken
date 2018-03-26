const https = require('https');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function(requestURL, callback){
  https.get(requestURL, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
         var fs = require('fs');



    fs.writeFile("/tmp/test.html", data, function(err) {
      if(err) {
          return console.log(err);
      }


      console.log("The file was saved!");
    });

    const dom = new JSDOM(data);

    let arrayImgSrc = [];
      dom.window.document.querySelectorAll("a > img").forEach(function(x){
      arrayImgSrc.push(x.attributes["data-src"].nodeValue);
      console.log(x);
    });
    console.log(arrayImgSrc);
    callback(arrayImgSrc);
  });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}


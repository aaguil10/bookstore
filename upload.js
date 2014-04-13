var querystring = require("querystring");

function upload(response, postData){
    console.log("Request Handler 'upload' was called");

    response.writeHead(200, { 'Content - Type': 'text/plain' });
    response.write(
        "Title: " + querystring.parse(postData).title + "\n"
      + "Author: " + querystring.parse(postData).author + "\n"
      + "Description: " + querystring.parse(postData).text
    );
    response.end();
}

exports.upload = upload;

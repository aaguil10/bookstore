var http = require("http");
var url = require("url");

function htmlbody(){
  console.log("in htmlbody()");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+

    'Title: <input type="text" name="title"><br>' +
    'Author: <input type="text" name="author"><br>' +
    'Description: <br><textarea name="text" rows="20" cols="60"></textarea>'+

    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '<html>';
  return body;

}


exports.htmlbody = htmlbody;
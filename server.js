//Pratice for using git

var mongoose = require('mongoose');
var http = require('http');
var url = require("url");
var router = require("./router");
var upload = require("./upload");
var index = require("./index");

var handle = {}
handle["/"] = index.index;
handle["/upload"] = upload.upload;

var Schema = mongoose.Schema;

function makedatabase(){
  console.log("creating schema!");
  var bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    date: {type: Date, default: Date.now}
  });

}


function onRequest(req, res){
  console.log("In onRequest!");
  var postData = "";

  //parse pathname
  var pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + " Received\n");
  req.setEncoding("utf8");

  //if form is submitted collect data
  req.addListener("data", function(postDataChunk){
    postData += postDataChunk;
    console.log("Received POST data chunk '"+
    postDataChunk + "'.");
  });

  //route to proper handler
  req.addListener("end", function(){
    router.route(handle, pathname, res, postData);
  });

}


http.createServer(onRequest).listen(8888);
console.log("Server has started");



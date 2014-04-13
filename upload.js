var querystring = require("querystring");
var mongoose = require('mongoose');


function upload(response, postData){
  console.log("Request Handler 'upload' was called");
  mongoose.connect('mongodb://localhost/test');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback(){
    //Create Schema
    var Schema = mongoose.Schema;
    console.log("creating schema!");
    var bookSchema = new Schema({
      title: String,
      author: String,
      description: String,
      date: {type: Date, default: Date.now}
    });

    //Create model
    var Book = mongoose.model('Book', bookSchema);

    var upbook = new Book({
      title: querystring.parse(postData).title,
      author: querystring.parse(postData).author,
      description: querystring.parse(postData).text,
    });

    upbook.save(function (err, silence){
      if(err) return console.error(err);
      console.log("saved book!");
    });

    Book.find(function (err, books){
      if(err) return console.error(err);
      console.log(books)
    });

    response.writeHead(200, { 'Content - Type': 'text/plain' });
    response.write(
        "Title: " + querystring.parse(postData).title + "\n"
      + "Author: " + querystring.parse(postData).author + "\n"
      + "Description: " + querystring.parse(postData).text
    );
    response.end();
  });
}

exports.upload = upload;


function body(){
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

    '<input type="submit" value="Submit text,title,author" />'+
    '</form>'+
    '</body>'+
    '<html>';
  return body;

}

function index(response, postData){
  console.log("In index()");
  response.writeHead(200, { 'Content - Type': 'text/html' });
  response.write(body());
  response.end();
}

exports.index = index;

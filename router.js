


function route(handler, pathname, res, postData){
  console.log("routing request for " + pathname);
  if(typeof handler[pathname] === 'function'){
    handler[pathname](res,postData);
  } else {
    console.log("No Request Handler found for " + pathname);
    res.writeHead(404, { 'Content - Type': 'text/plain' });
    res.write("404 not found");
    res.end();
  }

}

exports.route = route;

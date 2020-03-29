// //Install express server
// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/musicsite-test2'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/musicsite-test2/index.html'));
// });

// route.get("/", function(request, response) {
//     response.sendFile(__dirname+'/dist/musicsite-test2/index.html'
//     );
//   });


// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080,()=>{
//     console.log('app listening at : '+process.env.PORT || 8080);
// });

////////////////////////////////////////////////////////

// app.js
// init project
var express = require('express');
var app = express();
var fs = require('fs');
// var { APIRouter  } = require('./server/api');
// var {db, models} = require('./server/db');
var path = require('path');
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('dist/musicsite-test2'));

//app.use('/api', APIRouter);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/musicsite-test2/index.html'));
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 5000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
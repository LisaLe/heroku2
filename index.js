var express = require('express');
var moment = require('moment');
var app = express();



app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!');
});





app.get('/:query', function(req, res) {
    var date = req.params.query;
    if(moment(date,"MMMM D, YYYY").isValid()){
    	res.send("natural format");
    }

    if(date>=0){
    	res.send("unix format");
    }

    console.log(date);
    res.send(date);
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
var express = require('express');
var moment = require('moment');
var app = express();



app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!');
});





app.get('/:query', function(req, res) {
    var date = req.params.query;
    var unix = null;
    var natural = null;
    if(date>=0){
    	res.send("unix true");
    	unix = date;
    	natural = moment.unix(unix).format("MMMM D, YYYY");
    	
    }

    if(moment(date,"MMMM D, YYYY").isValid()){
    	res.send("natural true");
    	natural = date;
    	unix = moment(date,"MMMM D, YYYY").unix();
    	
    }
     var dateObj = { "unix": unix, "natural": natural };
     res.send(JSON.stringify(dateObj));

  
});




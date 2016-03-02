
var express = require('express');
var moment = require('moment');
var app = express();


app.set('port', (process.env.PORT || 5000));



app.get('/:query', function(req, res) {
    var date = req.params.query;
    var unix = null;
    var natural = null;
    if(date>=0){
    	//res.send("unix true");
    	unix = date;
    	natural = moment.unix(date).format("MMMM D, YYYY");

    	var dateObj = { "unix": unix, "natural": natural };
        res.send(JSON.stringify(dateObj));

    }

    else if(moment(date,"MMMM D, YYYY").isValid()){
    	//res.send("natural true");
    	natural = date;
    	unix = moment(date).unix();
    	var dateObj = { "unix": unix, "natural": natural };
      res.send(JSON.stringify(dateObj));
    }

    else{
      res.end();
    }

});




var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//app.set('port', (process.env.PORT || 5000));

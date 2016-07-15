var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
//new route
var getroute=require('./routes/getroute');
// var movieinfo=require('./routes/movieinfo');
// var mongo_demo=require('./routes/mongo_demo');
var movie_CRUD=require('./routes/movie_CRUD');
var cal1=require('./routes/cal1');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// connect to mongo db
mongoose.connect("mongodb://localhost/newMovieDb");
var db=mongoose.connection;
db.on('error',console.error.bind(console,"MongoDb connection error"));
db.once('open',function(){
  console.log("Connect to MongoDb");
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
//new route
app.use('/getroute',getroute);
// app.use('/movieinfo',movieinfo);
// app.use('/mongo_demo',mongo_demo);

app.use('/movie_CRUD',movie_CRUD);
app.use('/cal1',cal1);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;

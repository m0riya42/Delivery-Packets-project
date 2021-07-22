var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');

//added 22/07- sessions
// const session = require('cookie-session');
// const helmet = require('helmet');
// const hpp = require('hpp');
// const csurf = require('csurf');
// const passport = require('./routes/passport');




var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testApi");//add as test
var testDBRouter = require("./routes/testDB");//add as test


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', usersRouter);


app.use("/testApi", testAPIRouter);//add as test
app.use("/testDB", testDBRouter);//add as test



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



/* Set Security Configs */
// app.use(helmet());
// app.use(hpp());

// /* Set Cookie Settings */
// app.use(
//   session({
//     name: 'session',
//     secret: 'secretKeyWooo',
//     expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
//   })
// );
// app.use(csurf());

// app.use(limiter);
// app.use(passport.initialize());



module.exports = app;

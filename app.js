var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require('./config/database'); //variable para conexión a base de datos
var auth = require('./auth/main_auth');
var cors = require('cors');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var empleadosRouter = require('./routes/empleados.router');
var mascotasRouter = require('./routes/mascotas.router');
var fundacionesRouter = require('./routes/fundaciones.router');
var adoptantesRouter = require('./routes/adoptantes.router');
var usuariosRouter = require('./routes/usuarios.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

//mongo connect
database.mongoConnect();
app.use('/usuarios', usuariosRouter);
app.use(auth);

//Routers
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/empleados', empleadosRouter);
app.use('/mascotas', mascotasRouter);
app.use('/adoptantes', adoptantesRouter);
app.use('/fundaciones', fundacionesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

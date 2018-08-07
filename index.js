var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , SparkPost = require('sparkpost')


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// routes
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/login', function(request, response) {
  response.render('login/padrao');
});

app.get('/escola', function(request, response) {
  response.render('escola/padrao');
});

app.get('/cadastro', function(request, response) {
  response.render('cadastro/padrao');
});

// start the app
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

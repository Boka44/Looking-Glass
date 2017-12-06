express = require('express');
var path = require('path');


var home = require('./routes/home');
var services = require('./routes/services');
var hours = require('./routes/hours');
var events = require('./routes/events');
var contact = require('./routes/contact');


app = express();

app.set('view engine', 'ejs');

app.get('/', home);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/services', services);
app.use('/hours', hours);
app.use('/events', events);
app.use('/contact', contact);



//app.use('/drinks', drinks);

app.listen(2000, function() {
	console.log('Live at Port 2000!')
});
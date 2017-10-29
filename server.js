//npm packages needed for functionality
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creating express server
var app = express();

//setting initial port to user in listener
var PORT = process.env.PORT || 3030

//where express app knows how to handle data parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(__dirname + '/app/public'));
//point our server to x number of route files
//giving server a map of what to do when users visit or request data from urls
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// app.get('/', function(req, res) {
// 	res.sendFile(path.join(__dirname, '/app/public/home.html'));
// });

// app.get('/survey', function(req, res) {
// 	res.sendFile(path.join(__dirname, 'survey.html'));
// 		for (var i=0; i < friends.length; i++) {
// 			return res.json(friends[i]);
// 		}
// });

// app.post('/api/new', function(req, res) {
// 	var newFriend = req.body;
// 	console.log(newFriend);
// 	friends.push(newFriend);
// 	res.json(newFriend);
// });

//listener to start our server
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
})
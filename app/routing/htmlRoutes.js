var path = require('path');

module.exports = function(app) {

//when user visits page, html page changer!
// GET route for / gets home.html
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, './../public/home.html'));
	});

//GET route for /survey takes user to survey.html
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, './../public/survey.html'));
	});
};

// //if undefined path take to homepage
// 	app.use(function(req, res) {
// 		res.sendFile(path.join(__dirname, + '/../public.home.html'));
// 	})
// };


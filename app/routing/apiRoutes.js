var friends = require("../data/friends.js");

module.exports = function(app) {
//api get requests - what happens when users get to a page
//showing user JSON of data in table
app.get('/api/friends', function(req, res) {
	res.json(friends)
	console.log(friends)

});
//server respons to request letting users know there is table
//can user req.body because have body-parser
app.post('/api/friends', function(req, res) {
	console.log(friends);
	var currentFriend = req.body;
	var compatibility = [];

	if(friends.length > 1) {

		friends.forEach(function(user) {
			var totalCompatibility = 0;

			for(var i = 0; i < currentFriend.answers.length; i++) {
				var matchAnswer = user.answers[i];
				var currentAnswer = currentFriend.answers[i];
				var answerDiff = +matchAnswer - +currentAnswer;
				totalCompatibility += Math.abs(answerDiff);

			}
			console.log(friends)
			compatibility.push(totalCompatibility);
		});

		//find minimum difference of scores
		var minDiff = Math.min.apply(null, compatibility);
	
		var mostCompatible = [];

		for (var i = 0; i < compatibility[i].length; i++) {
			if(compatibility[i] === minDiff) {
				mostCompatible.push(friends[i]);
			}
		}
		res.json(mostCompatible);
	} else {
		res.json(friends);

	}
	friends.push(currentFriend)
})

// app.post('/api/clear', function() {
// 	friends = [];
// 	console.log(friends)
// });
};
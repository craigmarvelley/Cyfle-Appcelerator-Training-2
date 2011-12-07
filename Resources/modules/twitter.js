var database = Ti.Database.install('twitter.sqlite', 'twitter');


/* PUBLIC */

exports.loadStoredTweets = function () {

	var resultSet = database.execute('SELECT * FROM tweets');
	var tweets = [];
	
	while(resultSet.isValidRow()) {
		tweets.push(resultSet.fieldByName('json'));
		resultSet.next();		
	}
	
	return tweets;

}

exports.loadNewTweets = function (callback) {
	
	var httpClient = Ti.Network.createHTTPClient();
		
	httpClient.open('GET', 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=craigmarvelley');
	
	httpClient.onload = function() {
		var tweets = JSON.parse(this.responseText);
		callback.call(this, tweets);
	}
	
	httpClient.send();
	
}

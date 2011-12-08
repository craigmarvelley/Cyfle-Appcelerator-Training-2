var database = Ti.Database.install('twitter.sqlite', 'twitter');

/* PUBLIC */

exports.loadStoredTweets = function () {

	var tweets = [];

	var sql = "SELECT * FROM tweets ORDER BY id DESC";
	var resultSet = database.execute(sql);
	
	while(resultSet.isValidRow()) {
		
		// Get the tweet data and decode it
		var data = resultSet.fieldByName('tweet');
		var json = JSON.parse(data);
		
		// Add the tweet to our array
		tweets.push(json);
		
		// Advance to the next result
		resultSet.next();		
	}
	
	return tweets;

}

exports.loadNewTweets = function (callback) {
	
	var httpClient = Ti.Network.createHTTPClient();
		
	httpClient.open(
		'GET', 
		'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=craigmarvelley'
	);
	
	httpClient.onload = function() {
		var tweets = JSON.parse(this.responseText);
		
		var sql = "INSERT OR REPLACE INTO tweets (id, tweet, created_at)"
			        + " VALUES (?, ?, ?)";
		
		for(var i=0, n=tweets.length; i<n; i++) {
			
			var tweet = tweets[i];
			
			database.execute(sql, tweet.id, JSON.stringify(tweet), tweet.created_at);
			
		}
		
		callback.call(this, tweets);
	}
	
	httpClient.send();
	
}

exports.sendTweet = function (tweetText) {
	
	var httpClient = Ti.Network.createHTTPClient();
		
	httpClient.open(
		'POST', 
		'http://marvelley.com/post.php'
	);
	
	httpClient.onerror = function (e) {
		alert('Sorry, something went wrong');
	};
	
	httpClient.onload = function (e) {
		var response = this.responseText;
		var responseObject = JSON.parse(response);
		
		var message = responseObject.message;
		
		alert('Your tweet was: ' + message);
	};
	
	var request = {
		tweet: tweetText
	};
	
	httpClient.send(request);
	
}

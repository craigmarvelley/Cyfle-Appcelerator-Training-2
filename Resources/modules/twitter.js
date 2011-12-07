var database = Ti.Database.install('twitter.sqlite', 'twitter');

/* PUBLIC */

exports.loadStoredTweets = function () {

	var tweets = [];

	// LOAD STORED TWEETS HERE
	
	return tweets;

}

exports.loadNewTweets = function (callback) {
	
	var httpClient = Ti.Network.createHTTPClient();
		
	httpClient.open('GET', 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=craigmarvelley');
	
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

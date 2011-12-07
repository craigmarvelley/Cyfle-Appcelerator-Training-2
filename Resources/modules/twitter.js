exports.loadNewTweets = function (callback) {
	
	var httpClient = Ti.Network.createHTTPClient();
		
	httpClient.open('GET', 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=craigmarvelley');
	
	httpClient.onload = function() {
		var tweets = JSON.parse(this.responseText);
		callback.call(this, tweets);
	}
	
	httpClient.send();
	
}

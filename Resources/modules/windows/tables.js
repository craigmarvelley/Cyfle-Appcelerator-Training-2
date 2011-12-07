
var twitter = require('modules/twitter'),
	tweet = require('modules/windows/tweet');

function loadStoredTweetsIntoTableView(tableView) {

	var tweets = twitter.loadStoredTweets();
	var rows = [];
	
	for(var i=0, n=tweets.length; i<n; i++) {
		var row = createTweetRow(tweets[i]);			
		rows.push(row);
	}
	
	tableView.data = rows;
	
}

function loadNewTweetsIntoTableView(tableView) {
	
	var callback = function (tweets) {
		
		var rows = [];
		
		for(var i=0, n=tweets.length; i<n; i++) {
			
			var row = createTweetRow(tweets[i]);			
			rows.push(row);
			
		}
		
		tableView.data = rows;
		
	};
	
	twitter.loadNewTweets(callback);
	
}

function createTweetRow(tweet) {
	
	var row = Ti.UI.createTableViewRow({
		hasChild: true,
		className: 'tweet',
		tweet: tweet
	});
	
	var image = Ti.UI.createImageView({
		image: tweet.user.profile_image_url,
		width: 40,
		height: 40,
		top: 4,
		left: 4
	});
	
	var label = Ti.UI.createLabel({
		top: 4,
		left: 50,
		width: 230,
		height: 20,
		text: tweet.text,
		font: {
			fontSize: 12
		}
	});
	
	row.add(image);
	row.add(label);
	
	return row;
	
}

/* PUBLIC */

exports.TableWindow = function (tabGroup) {
	
	var window = Ti.UI.createWindow({
		backgroundColor: '#FFF'
	});
	
	var tableView = Ti.UI.createTableView();
	
	window.add(tableView);
	
	if(Ti.Platform.name != 'android') {
		var reloadBtn = Ti.UI.createButton({
			title: 'Reload'
		});
		
		reloadBtn.addEventListener('click', function () {
			loadNewTweetsIntoTableView(tableView);
		});
		
		window.rightNavButton = reloadBtn;
	}
	
	loadStoredTweetsIntoTableView(tableView);
	
	tableView.addEventListener('click', function (e) {
		var tweetWindow = new tweet.TweetWindow(e.row.tweet);

		tabGroup.activeTab.open(tweetWindow);
	});
	
	return window;
	
}

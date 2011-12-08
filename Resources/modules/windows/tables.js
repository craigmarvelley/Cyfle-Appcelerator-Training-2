
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
		width: 250,
		height: 20,
		text: tweet.text,
		font: {
			fontSize: 12
		}
	});
	
	var adjustForOrientation = function (e) {
		if(e.orientation == Ti.UI.LANDSCAPE_LEFT || e.orientation == Ti.UI.LANDSCAPE_RIGHT) {
			label.width = 380;
		}
		else {
			label.width = 250;
		}
	};
	
	Titanium.Gesture.addEventListener('orientationchange', adjustForOrientation);
	
	row.add(image);
	row.add(label);
	
	return row;
	
}

/* PUBLIC */

exports.TableWindow = function (tabGroup) {
	
	var window = Ti.UI.createWindow({
		backgroundColor: '#FFF',
		title: 'Tweets'
	});
	
	// Allow the window to rotate to portrait and landscape orientations
	window.orientationModes = [
		Ti.UI.PORTRAIT,
		Ti.UI.LANDSCAPE_LEFT,
		Ti.UI.LANDSCAPE_RIGHT
	];
	
	// Create the table and allow it to be edited (iOS only)
	var tableView = Ti.UI.createTableView({
		editable: true
	});
	
	window.add(tableView);
	
	if(Ti.Platform.name != 'android') {
		
		// Editing
		var editBtn = Ti.UI.createButton({
			title: 'Edit'
		});
		
		var isEditing = false;
		
		editBtn.addEventListener('click', function () {
			if(isEditing) {
				tableView.editing = false;
				tableView.moving = false;
				isEditing = false;
				editBtn.title = 'Edit';
			}
			else {
				tableView.editing = true;
				tableView.moving = true;
				isEditing = true;
				editBtn.title = 'Stop';
			}
		});
		
		window.leftNavButton = editBtn;
		
		// Reloading
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

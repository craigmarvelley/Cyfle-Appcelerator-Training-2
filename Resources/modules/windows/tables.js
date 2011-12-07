
var twitter = require('modules/twitter');

function loadStoredTweetsIntoTableView(tableView) {

	var tweets = twitter.loadStoredTweets();
	var rows = [];
	
	for(var i=0, n=tweets.length; i<n; i++) {
		
	}
	
}

function loadNewTweetsIntoTableView(tableView) {
	
	var callback = function (tweets) {
		
		var rows = [];
		
		for(var i=0, n=tweets.length; i<n; i++) {
			
			rows.push({
				title: tweets[i].text
			});
			
		}
		
		tableView.data = rows;
		
	};
	
	twitter.loadNewTweets(callback);
	
}

/* PUBLIC */

exports.TableWindow = function () {
	
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
	
	return window;
	
}

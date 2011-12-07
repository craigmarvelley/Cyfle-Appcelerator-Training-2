
var twitter = require('modules/twitter');

function loadNewTweetsIntoTableView(tableView) {
	
	var callback = function (tweets) {
		
		var rows = [];
		
		for(var i=0, n=tweets.length; i<n; i++) {
			
			var row = Ti.UI.createTableViewRow({
				hasChild: true,
				className: 'tweet'
			});
			
			var image = Ti.UI.createImageView({
				image: tweets[i].user.profile_image_url,
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
				text: tweets[i].text,
				font: {
					fontSize: 12
				}
			});
			
			row.add(image);
			row.add(label);
			
			rows.push(row);
			
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

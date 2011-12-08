var twitter = require('modules/twitter');

exports.TweetWindow = function (tweet) {
	
	var window = Ti.UI.createWindow({
		layout: 'vertical',
		title: tweet.user.name,
		backgroundColor: 'white'
	});
	
	var textArea = Ti.UI.createTextArea({
		width: 300,
		height: 200,
		left: 10,
		right: 10,
		value: tweet.text,
		font: {
			fontSize: 14
		}
	});
	
	var dateLabel = Ti.UI.createLabel({
		text: tweet.created_at,
		height: 30,
		width: 300,
		left: 10,
		right: 10,
		top: 20,
		font: {
			fontSize: 12
		}
	});
	
	window.add(textArea);
	window.add(dateLabel);
	
	var openReplyWindow = function () {
		var replyWindow = new exports.ReplyWindow();
		replyWindow.open({
			modal: true,
			modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
			modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN
		});
	};
	
	// Reply
	if(Ti.Platform.name != 'android') {
		var replyBtn = Ti.UI.createButton({
			title: 'Reply'
		});
		
		replyBtn.addEventListener('click', openReplyWindow);
		
		window.rightNavButton = replyBtn;
	}
	else {
		window.activity.onCreateOptionsMenu = function (e) {
	        var menu = e.menu;
	        
	        var replyItem = menu.add({
	        	title: 'Reply'
	        });
	        
	        replyItem.addEventListener('click', openReplyWindow);
	    };
	}
	
	return window;
	
}

exports.ReplyWindow = function () {
	
	var window = Ti.UI.createWindow({
		title: 'Reply',
		modal: true,
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var textarea = Ti.UI.createTextArea({
		left: 10,
		top: 10,
		right: 10,
		height: 100,
		editable: true
	});
	
	window.add(textarea);
	
	// Cancel button
	var cancelBtn = Ti.UI.createButton({
		title: 'Close'
	});
	
	cancelBtn.addEventListener('click', function () {
		window.close();
	});
	
	// Send button
	var sendBtn = Ti.UI.createButton({
		title: 'Send'
	});
	
	sendBtn.addEventListener('click', function () {
		var tweet = textarea.value 
		twitter.sendTweet(tweet);
	});
	
	// If we're not on Android, add the buttons to the nav bar
	if(Ti.Platform.name != 'android') {
		window.leftNavButton = cancelBtn;
		window.rightNavButton = sendBtn;
	}
	else {
		cancelBtn.width = 200;
		cancelBtn.height = 50;
		
		sendBtn.width = 200;
		sendBtn.height = 50;
		
		window.add(cancelBtn);
		window.add(sendBtn);
	}
	
	return window;
	
}

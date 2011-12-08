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
	
	// Reply
	var replyBtn = Ti.UI.createButton({
		title: 'Reply'
	});
	
	replyBtn.addEventListener('click', function () {
		var replyWindow = new exports.ReplyWindow();
		
		replyWindow.open();
	});
	
	window.rightNavButton = replyBtn;
	
	return window;
	
}

exports.ReplyWindow = function () {
	
	var window = Ti.UI.createWindow({
		title: 'Reply',
		modal: true,
		backgroundColor: 'white'
	});
	
	var closeBtn = Ti.UI.createButton({
		title: 'Close'
	});
	
	window.rightNavButton = closeBtn;
	
	closeBtn.addEventListener('click', function () {
		window.close();
	});
	
	return window;
	
}

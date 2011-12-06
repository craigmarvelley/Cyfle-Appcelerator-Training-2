exports.WebViewWindow = function () {
	
	var label = Ti.UI.createLabel({
		text: 'Webview'
	});
	
	var window = Ti.UI.createWindow({
		backgroundColor: '#FFF'
	});
	
	window.add(label);
	
	return window;
	
}

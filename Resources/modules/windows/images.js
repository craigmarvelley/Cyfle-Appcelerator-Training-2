exports.ImageWindow = function () {
	
	var label = Ti.UI.createLabel({
		text: 'Image'
	});
	
	var window = Ti.UI.createWindow({
		backgroundColor: '#FFF'
	});
	
	window.add(label);
	
	return window;
	
}

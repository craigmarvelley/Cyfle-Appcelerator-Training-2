exports.FormWindow = function () {
	
	var label = Ti.UI.createLabel({
		text: 'Form'
	});
	
	var window = Ti.UI.createWindow({
		backgroundColor: '#FFF'
	});
	
	window.add(label);
	
	return window;
	
}

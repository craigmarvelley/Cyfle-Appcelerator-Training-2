exports.MapWindow = function () {
	
	var label = Ti.UI.createLabel({
		text: 'Map'
	});
	
	var window = Ti.UI.createWindow({
		backgroundColor: '#FFF'
	});
	
	window.add(label);
	
	return window;
	
}

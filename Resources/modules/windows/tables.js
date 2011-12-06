exports.TableWindow = function () {
	
	var label = Ti.UI.createLabel({
		text: 'Table'
	});
	
	var window = Ti.UI.createWindow({
		backgroundColor: '#FFF'
	});
	
	window.add(label);
	
	return window;
	
}

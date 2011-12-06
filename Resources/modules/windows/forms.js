function createFormAndAddToWindow(window) {
	
	var label = Ti.UI.createLabel({
		top: 10,
		left: 10,
		right: 10,
		height: 20,
		text: 'Form',
		color: 'red',
		font: {
			fontSize: 16,
			fontWeight: 'bold'
		}
	});
	
	var textfieldHeight = 30;
	if(Ti.Platform.name == 'android') {
		textfieldHeight = 50;
    }
	
	var textfield = Ti.UI.createTextField({
		top: 10,
		left: 10,
		right: 10,
		hintText: 'Name',
		height: textfieldHeight 
	});
	
	var addressLabel = Ti.UI.createLabel({
		top: 10,
		left: 10,
		right: 10,
		height: 20,
		text: 'Address',
		font: {
			fontSize: 14,
			fontWeight: 'bold'
		}
	});
	
	var textarea = Ti.UI.createTextArea({
		top: 10,
		left: 10,
		right: 10,
		height: 60,
		editable: true
	});
	
	var button = Ti.UI.createButton({
		top: 10,
		title: 'Click me!',
		width: 100,
		height: 30
	});
	
	window.add(label);
	window.add(textfield);
	window.add(addressLabel);
	window.add(textarea);
	window.add(button);
	
	button.addEventListener('click', function () {
		
		var message = 'Hello ' + textfield.value + '\nYour address is: ' + textarea.value;
		
		var alert = Ti.UI.createAlertDialog({
			message: message
		});
		
		alert.show();
		
	});
	
}

exports.FormWindow = function () {
	
	var window = Ti.UI.createWindow({
		title: 'Forms',
		backgroundColor: '#666',
		layout: 'vertical'
	});
	
	createFormAndAddToWindow(window);
	
	return window;
	
}

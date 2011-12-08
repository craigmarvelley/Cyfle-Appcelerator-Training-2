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
	
	button.addEventListener('click', function () {
		
		var message = 'Hello ' + textfield.value + '\nYour address is: ' + textarea.value;
		
		var alert = Ti.UI.createAlertDialog({
			message: message
		});
		
		alert.show();
		
	});
	
	var englishBtn = Ti.UI.createButton({
		top: 10,
		title: 'Use English',
		width: 100,
		height: 30
	});
	
	englishBtn.addEventListener('click', function () {
		
		// Call the function in the app.js module
		app._setLocale('en');
		
	});
	
	var welshBtn = Ti.UI.createButton({
		top: 10,
		title: 'Use Welsh',
		width: 100,
		height: 30
	});
	
	welshBtn.addEventListener('click', function () {
		
		// Call the function in the app.js module
		app._setLocale('cy');
		
	});
	
	var sayHelloBtn = Ti.UI.createButton({
		top: 10,
		title: 'Say hello!',
		width: 100,
		height: 30
	});
	
	sayHelloBtn.addEventListener('click', function () {
		
		var translatedHelloString = app._getString('hello');
		alert(translatedHelloString);
		
	});
	
	window.add(label);
	window.add(textfield);
	window.add(addressLabel);
	window.add(textarea);
	window.add(button);
	window.add(englishBtn);
	window.add(welshBtn);
	window.add(sayHelloBtn);

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

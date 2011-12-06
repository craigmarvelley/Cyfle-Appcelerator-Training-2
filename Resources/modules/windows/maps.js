exports.MapWindow = function () {
	
	var window = Ti.UI.createWindow({
		backgroundColor: '#FFF',
		title: 'Maps',
		layout: 'vertical'
	});
	
	var loadButton = Ti.UI.createButton({
		title: 'Load',
		width: 100,
		height: 30
	});
	
	var toolbar;
	if(Ti.Platform.name == 'android') {
		toolbar = Ti.UI.createView({
			layout: 'horizontal',
			height: 44
		});
		
		toolbar.add(loadButton);
	}
	else {
		toolbar = Ti.UI.createToolbar({
			height: 44,
			zIndex: 10,
			items: [
				loadButton
			]
		});
	}
	
	var annotation = Ti.Map.createAnnotation({
		latitude: 51.47828,
	    longitude: -3.18243
	});
	
	var mapview = Ti.Map.createView({
		region: {
			latitude: 51.47828,
			longitude: -3.18243,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01			
		},
		animate:true,
    	regionFit:true,
    	width: 320,
    	height: 400,
    	annotations: [annotation]
	});

	window.add(toolbar);
	window.add(mapview);
	
	return window;
	
}

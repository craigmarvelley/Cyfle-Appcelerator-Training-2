function loadMapAnnotations(mapview, places) {
	
	var annotations = [];
	
	for(var i=0, n=places.length; i<n; i++) {
		
		var annotation = {
			latitude: places[i].Latitude,
			longitude: places[i].Longitude,
			title: places[i].Title,
			subtitle: places[i].Address
		};
		
		annotations.push(annotation);
		
	}
	
	mapview.annotations = annotations;
	
	mapview.region = {
		latitude: annotations[0].latitude,
		longitude: annotations[0].longitude,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01
	};
	
}

/* PUBLIC */

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
	
	var mapview = Ti.Map.createView({
		animate:true,
    	regionFit:true,
    	width: 320,
    	height: 400
	});

	window.add(toolbar);
	window.add(mapview);
	
	loadButton.addEventListener('click', function (e) {
		
		var httpClient = Ti.Network.createHTTPClient();
		
		httpClient.open('GET', 'http://tinyurl.com/bot8ece');
		
		httpClient.onload = function() {
			var data = JSON.parse(this.responseText);
			var places = data.query.results.Result;
			
			loadMapAnnotations(mapview, places);
			
		}
		
		httpClient.send();
		
	});
	
	return window;
	
}

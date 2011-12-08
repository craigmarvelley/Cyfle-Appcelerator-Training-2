var forms = require('modules/windows/forms'),
	images = require('modules/windows/images'),
	tables = require('modules/windows/tables'),
	webviews = require('modules/windows/webviews'),
	maps = require('modules/windows/maps');
	
var locale = 'en';

var translations = {
	en: {
		hello: 'Hey there!',
		goodbye: 'So long!'
	},
	cy: {
		hello: 'Hwyl!',
		goodbye: 'Hwyl fawr!'
	}
};

/* PUBLIC */

exports.AppTabGroup = function () {
	
	// create tab group
    var tabGroup = Titanium.UI.createTabGroup();

	// Forms
	var formWindow = new forms.FormWindow();
	var formsTab = Titanium.UI.createTab({  
	    icon:'KS_nav_views.png',
	    title:'Forms',
	    window:formWindow
	});
	
	// Images
	var imagesWindow = new images.ImageWindow();
	var imagesTab = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Images',
	    window:imagesWindow
	});
	
	// Tables
	var tableWindow = new tables.TableWindow(tabGroup);
	var tablesTab = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Tables',
	    window:tableWindow
	});
	
	// Remote Webview
	var webviewWindow = new webviews.WebViewWindow();
	var webviewsTab = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'WebViews',
	    window:webviewWindow
	});
	
	// Maps
	var mapWindow = new maps.MapWindow();
	var mapsTab = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Maps',
	    window:mapWindow
	});
	
	// Remote Webview
	var localWebviewWindow = new webviews.LocalWebViewWindow();
	var localWebviewsTab = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'WebViews 2',
	    window:localWebviewWindow
	});
	
	//  add tabs
	tabGroup.addTab(formsTab);  
	tabGroup.addTab(imagesTab);
	tabGroup.addTab(tablesTab);
	tabGroup.addTab(webviewsTab);
	tabGroup.addTab(localWebviewsTab);
	tabGroup.addTab(mapsTab);
	
	return tabGroup;
		
}

exports._setLocale = function ( newLocale ) {
	
	locale = newLocale;
	
}

exports._getString = function (key) {

	var string = translations[locale][key];
	
	return string;
	
}

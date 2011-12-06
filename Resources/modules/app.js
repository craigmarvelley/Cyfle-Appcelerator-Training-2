var forms = require('modules/windows/forms'),
	images = require('modules/windows/images'),
	tables = require('modules/windows/tables'),
	webviews = require('modules/windows/webviews'),
	maps = require('modules/windows/maps');

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
	var tableWindow = new tables.TableWindow();
	var tablesTab = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Tables',
	    window:tableWindow
	});
	
	// Webview
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
	
	//  add tabs
	tabGroup.addTab(formsTab);  
	tabGroup.addTab(imagesTab);
	tabGroup.addTab(tablesTab);
	tabGroup.addTab(webviewsTab);
	tabGroup.addTab(mapsTab);
	
	return tabGroup;
		
}

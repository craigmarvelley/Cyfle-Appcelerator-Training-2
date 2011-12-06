// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var app = require('modules/app');

var tabGroup = new app.AppTabGroup();

tabGroup.open();

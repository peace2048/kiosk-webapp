'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-window-all-closed', function(){
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', function(){
    mainWindow = new BrowserWindow({kiosk: true});
    mainWindow.setAutoHideMenuBar(true);
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadURL('file://'+__dirname+'/index.html');
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});
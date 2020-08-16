const { app, BrowserWindow } = require('electron')
const { createWindowHook } = require('./hooks')

app.whenReady().then(createWindowHook)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindowHook()
  }
})
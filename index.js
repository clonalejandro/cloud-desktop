const { app, BrowserWindow } = require('electron')
const { createWindowHook } = require('./hooks')

app.whenReady().then(createWindowHook)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindowHook()
  }
})
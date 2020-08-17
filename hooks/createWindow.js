const path = require('path')
const { BrowserWindow, nativeImage, app } = require('electron')
const readConfigHook = require('./readConfig')

const settings = {
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: false
  }
}

module.exports = () => {
  const window = new BrowserWindow(settings)
  const icon = nativeImage.createFromPath(path.join(__dirname, '../icons/icon.png'))
  
  window.setTitle('Cloud')
  
  window.setIcon(icon)
  app.dock.setIcon(icon)
  
  readConfigHook((err, data) => {
    if (err) window.loadFile('./views/setup.html')
    else window.loadURL(JSON.parse(data).url)
  })

  return window
}
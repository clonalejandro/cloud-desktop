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

function createWindow(){
  const window = new BrowserWindow(settings)
  const icon = nativeImage.createFromPath(path.join(__dirname, '../icons/icon.png'))

  window.setTitle('Cloud')
  window.setIcon(icon)
  window.setMenuBarVisibility(false)

  if (app.dock)
    app.dock.setIcon(icon)

  return window
}

module.exports = () => {
  var window

  readConfigHook((err, data) => {
    if (err){
      settings.webPreferences.nodeIntegration = true
      window = createWindow()
      window.loadFile('./views/setup.html')
    }
    else {
      settings.webPreferences.nodeIntegration = false
      window = createWindow()
      window.loadURL(JSON.parse(data).url)
    }
  })

  return window
}

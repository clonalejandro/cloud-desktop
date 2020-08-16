const { BrowserWindow } = require('electron')
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
  readConfigHook((err, data) => {
    if (err) window.loadFile('./views/setup.html')
    else window.loadURL(JSON.parse(data).url)
  })

  return window
}
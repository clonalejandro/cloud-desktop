const fs = require('fs')

module.exports = (json, callback) => {
  if (!fs.existsSync('config.json'))
    fs.writeFile('config.json', JSON.stringify(json), callback)
}
const fs = require('fs')

module.exports = callback => 
  fs.readFile('config.json', callback)

const { remote } = require('electron')
const { createConfigHook } = require('../hooks')
const $ = e => document.querySelector(e)

document.addEventListener('DOMContentLoaded', () => {
  $('form').addEventListener('submit', e => {
    const json = {
      url: $('input').value
    }

    createConfigHook(json,
      err => {
        if (err) alert(err)
        else remote.getCurrentWindow().loadURL(json.url)
      }
    )
  })
})

//TODO: onSubmit createConfigHook

const { createConfigHook, createWindowHook } = require('../hooks')
const $ = e => document.querySelector(e)

document.addEventListener('DOMContentLoaded', () => {
  $('form').addEventListener('submit', e => {
    const json = { 
      url: $('input').value 
    }

    createConfigHook(json,
      err => {
        if (err)
          alert(err)
        else window.location.href(json)
      }
    )
  })
})

//TODO: onSubmit createConfigHook
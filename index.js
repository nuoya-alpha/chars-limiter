import Vue from 'vue'

let charsLimiter={}
  charsLimiter.install = function (Vue, options) {
    Vue.directive('int', {
        inserted: function (el) {
            el.addEventListener('keypress', function (e) {
              e = e || window.event
              let charKey = typeof e.key == 'string' ? e.key : e.key
              let re = /^[0-9]*$/
              if (!re.test(Number(charKey))) {
                if (e.preventDefault) {
                  e.preventDefault()
                } else {
                  e.returnValue = false
                }
              }
            })
          }
    })}


export  default charsLimiter
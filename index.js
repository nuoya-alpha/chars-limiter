let charsLimiter={}
  charsLimiter.install = function (Vue, options) {
    Vue.directive('integer', {
        inserted: function (el) {
            el.addEventListener('keypress', function (e) {
              e = e || window.event
              let charKey = typeof e.key == 'string' ? e.key : e.key
              if (!(/^[0-9]*$/).test(Number(charKey))) {
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
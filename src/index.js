const ps = require('current-processes')
const _ = require('lodash')

function getInfo(orderColumn, size) {
  ps.get((err, processes) => {
    if (err) {
      console.log('err', err)
    } else {
      let sorted = _.sortBy(processes, orderColumn)
      let paginated = sorted.reverse().splice(0, size)
      paginated.forEach(item => {
        console.log(item.pid, item.name, item.cpu)
        console.log('\n')
      })
      setTimeout(() => {
        getInfo('cpu', size)
      }, 1500);
    }
  })
}

getInfo('cpu', 3)
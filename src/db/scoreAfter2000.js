/*
 * @Date         : 2021-03-01 21:30:49
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-02 22:35:05
 * @FilePath     : /douban250/src/db/scoreAfter2000.js
 */
const movies = require('./list');

let list = []
movies.forEach(item => {
  const yearList = list.map(item => item.year)

  if (item.year && item.year !== 'N/A' && item.year >= 2000) {
    const index = yearList.indexOf(item.year)

    if (index != -1) {
      list[index].list.push(item.score)
    } else {
      list.push({
        year: item.year,
        list: [item.score]
      })
    }
  }
})

list = list.map(item => {
  return {
    ...item,
    len: item.list.length
  }
})

list = list.map(item => {
  return {
    year: item.year,
    score: (item.list.reduce((a, b) => Number((+a + +b)))/item.len).toFixed(2)
  }
})

list.sort((a, b) => {
  const an = +a.year
  const bn = +b.year
  return an-bn
})
module.exports = list
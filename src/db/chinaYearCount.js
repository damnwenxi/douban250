/*
 * @Date         : 2021-03-02 20:59:58
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-02 22:34:46
 * @FilePath     : /douban250/src/db/chinaYearCount.js
 */
const movies = require('./list');

let list = []
movies.forEach(item => {
  const yearList = list.map(item => item.year)
  if (item.year && item.year !== 'N/A' && item.country.indexOf('中国') != -1) {
    const index = yearList.indexOf(item.year)

    if (index != -1) {
      list[index].count++
    } else {
      list.push({
        year: item.year,
        count: 1
      })
    }
  }
})

list.sort((a, b) => {
  const an = +a.year
  const bn = +b.year
  return an-bn
})
module.exports = list
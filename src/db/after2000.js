/*
 * @Date         : 2021-03-01 21:08:13
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-01 21:38:12
 * @FilePath     : /douban250/src/db/after2000.js
 */
const movies = require('./list');
const types = require('./types');

let list = []
movies.forEach(item => {
  const nameList = list.map(item => item.name)
  if (item.category && item.category !== 'N/A' && item.year >= 2000) {
    const index = nameList.indexOf(item.category)
    if (index != -1) {
      list[index].value++
    } else {
      list.push({
        name: item.category,
        value: 1
      })
    }
  }
})
list = list.filter(item => {
  return item.value > 2
})
module.exports = list
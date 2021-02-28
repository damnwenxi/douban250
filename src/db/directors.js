/*
 * @Date         : 2021-02-28 21:47:49
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-28 22:06:05
 * @FilePath     : /douban250/src/db/directors.js
 */
const movies = require('./list');

let list = []
movies.forEach(item => {
  if (item.director && item.director !== 'N/A') {
    const nameList = list.map((item) => item.name)
    const index = nameList.indexOf(item.director)
    if ( index == -1) {
      list.push({
        name: item.director,
        value: 1
      })
    } else {
      list[index].value++
    }
  }
})

list.sort((a, b) => {
  const numa = a.value
  const numb = b.value
  return numb-numa
})

list = list.slice(0, 10)

module.exports = list
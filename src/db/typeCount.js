/*
 * @Date         : 2021-02-28 22:11:07
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-28 22:17:54
 * @FilePath     : /douban250/src/db/typeCount.js
 */
const movies = require('./list');
const types = require('./types');

let list = new Array(types.length).fill(0)
movies.forEach(item => {
  if (item.category && item.category !== 'N/A') {
    const typeList = item.category.split('/')

    typeList.forEach(type => {
      const index = types.indexOf(type)
      list[index]++
    })
  }
})

module.exports = list
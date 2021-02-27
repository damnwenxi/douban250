/*
 * @Date         : 2021-02-27 21:34:54
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-27 22:27:01
 * @FilePath     : /douban250/src/db/years.js
 */
const movies = require('./list');

const list = [];
movies.forEach((item) => {
  if (/\d+/.test(item.year)) {
    list.push(item.year);
  }
});

const uniqueYearList = Array.from(new Set(list)).sort((a, b) => {
  a = +a;
  b = +b;
  return a-b
});

module.exports = uniqueYearList;

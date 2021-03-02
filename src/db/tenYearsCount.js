/*
 * @Date         : 2021-03-02 20:59:58
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-02 21:13:43
 * @FilePath     : /douban250/src/db/tenYearsCount.js
 */
const movies = require('./list');
const types = require('./types');

let list = [
  {
    count: 0,
    range: [0,1950],
    label: '1950以前'
  },
  {
    count: 0,
    range: [1950,1960],
    label: '1950-1960'
  },
  {
    count: 0,
    range: [1960,1970],
    label: '1960-1970'
  },
  {
    count: 0,
    range: [1970,1980],
    label: '1970-1980'
  },
  {
    count: 0,
    range: [1980,1990],
    label: '1980-1990'
  },
  {
    count: 0,
    range: [1990,2000],
    label: '1990-2000'
  },
  {
    count: 0,
    range: [2000,2010],
    label: '2000-2010'
  },
  {
    count: 0,
    range: [2010,2020],
    label: '2010-2020'
  }
]
movies.forEach(item => {
  if (item.year && item.year !== 'N/A') {
    list.forEach(data => {
      if (item.year >= data.range[0] && item.year <= data.range[1]) {
        data.count++
      }
    })
  }
})
module.exports = list
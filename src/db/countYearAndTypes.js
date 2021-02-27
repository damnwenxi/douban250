/*
 * @Date         : 2021-02-27 21:58:02
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-27 22:25:04
 * @FilePath     : /douban250/src/db/countYearAndTypes.js
 * @desc         : 每一年各类型电影的数量
 */

const movies = require('./list');
const years = require('./years');
const types = require('./types');
console.log(years)

const list = [];
types.forEach((type) => {
  const yearsForCount = {};
  const typesForYear = [];
  movies.forEach((movie) => {
    if (movie.category.indexOf(type) !== -1) {
      if (yearsForCount[movie.year]) {
        ++yearsForCount[movie.year];
      } else {
        yearsForCount[movie.year] = 1;
      }
    }
  });

  years.forEach((year, index) => {
    typesForYear[index] = yearsForCount[year] || 0;
  });

  list.push({
    name: type,
    type: 'line',
    smooth: true,
    data: typesForYear,
  });
});

module.exports = list;

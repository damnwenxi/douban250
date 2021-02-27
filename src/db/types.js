/*
 * @Date         : 2021-02-27 21:50:51
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-27 22:18:04
 * @FilePath     : /douban250/src/db/types.js
 */
const movies = require('./list');

const set = new Set();
movies.forEach((item) => {
  const types = item.category;
  if (types !== 'N/A') {
    const typeList = types.split('/');
    typeList.forEach((type) => {
      set.add(type);
    });
  }
});

module.exports = Array.from(set);

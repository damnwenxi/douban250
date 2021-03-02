/*
 * @Date         : 2021-03-02 23:09:23
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-02 23:21:23
 * @FilePath     : /douban250/src/db/countryPie.js
 */
const movies = require('./list');

let list = []
movies.forEach(item => {
  const countryList = list.map(item => item.name)
  let country = item.country.trim()
  if (country && country !== 'N/A') {
    const listA = country.split(' ')
    listA.forEach(c => {
      const index = countryList.indexOf(c)
      if (index != -1) {
        list[index].value++
      } else {
        list.push({
          name: c,
          value: 1
        })
      }
    })
  }
})

module.exports = list
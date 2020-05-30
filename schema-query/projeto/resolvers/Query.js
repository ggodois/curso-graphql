const { users, profiles } = require('../data/db')

module.exports = {
  hello () {
    return 'Olar'
  },
  currentTime () {
    return new Date()
  },
  loggedUser () {
    return {
      id: 1,
      name: 'Leo Santtos',
      email: 'leonardosanttos@live.com',
      age: 24,
      real_wage: 5000.5,
      vip: true
    }
  },
  featuredProduct () {
    return {
      name: 'D&G Purse',
      price: 5000,
      discount: 15
    }
  },
  lotteryNumbers () {
    // return [4, 8, 13, 27, 33, 45]
    const ascending = (a, b) => a - b
    return Array(6)
      .fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(ascending)
    // replace duplicated values
    // .filter((item, pos, arr) => {
    //   return arr.indexOf(item) === pos
    // })
  },
  users () {
    return users
  },
  user (_, { id }) {
    const selected = users.filter(item => String(item.id) === String(id))
    return selected ? selected[0] : null
  },
  profiles () {
    return profiles
  },
  profile (_, { id }) {
    const selected = profiles.filter(item => String(item.id) === String(id))
    return selected ? selected[0] : null
  }
}

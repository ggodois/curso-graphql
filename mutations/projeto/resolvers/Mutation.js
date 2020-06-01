const { users, nextId } = require('../data/db')

module.exports = {
  // { name, email, age }
  newUser (_, args) {
    const existingEmail = users.some(item => item.email === args.email)

    if (existingEmail) {
      throw new Error('E-mail already taken')
    }

    const newUser = {
      ...args,
      id: nextId(),
      profile_id: 1,
      status: 'ATIVO'
    }

    users.push(newUser)
    return newUser
  },
  deleteUser (_, { id }) {
    const i = users.findIndex(item => String(item.id) === String(id))

    if (i < 0) {
      return null
    }

    const deleted = users.splice(i, 1)

    return deleted ? deleted[0] : null
  },
  updateUser (_, args) {
    const i = users.findIndex(item => String(item.id) === String(args.id))

    if (i < 0) {
      return null
    }

    const user = {
      ...users[i],
      ...args
    }

    return user
  }
}

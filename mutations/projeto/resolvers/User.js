const { profiles } = require('../data/db')

module.exports = {
  profile (user) {
    const selectedProfile = profiles.filter(
      item => String(item.id) === String(user.profile_id)
    )
    return selectedProfile ? selectedProfile[0] : null
  }
}

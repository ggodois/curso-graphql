let id = 1

function nextId () {
  return id++
}

const users = [
  {
    id: nextId(),
    name: 'Brad Pitt',
    email: 'bd@ahem.email',
    age: 30,
    profile_id: 1,
    status: 'ATIVO'
  },
  {
    id: nextId(),
    name: 'Angelina Jolie',
    email: 'aj@ahem.eamil',
    age: 42,
    profile_id: 2,
    status: 'INATIVO'
  },
  {
    id: nextId(),
    name: 'Emma Watson',
    email: 'hermionegranger@ahem.email',
    age: 25,
    profile_id: 2,
    status: 'BLOQUEADO'
  }
]

const profiles = [
  {
    id: 1,
    name: 'Comum'
  },
  {
    id: 2,
    name: 'Administrador'
  }
]

module.exports = {
  users,
  profiles,
  nextId
}

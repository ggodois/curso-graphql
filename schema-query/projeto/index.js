const { ApolloServer, gql } = require('apollo-server')

const users = [
  {
    id: 1,
    name: 'Brad Pitt',
    email: 'bd@ahem.email',
    age: 30
  },
  {
    id: 2,
    name: 'Angelina Jolie',
    email: 'aj@ahem.eamil',
    age: 42
  },
  {
    id: 3,
    name: 'Emma Watson',
    email: 'hermionegranger@ahem.email',
    age: 25
  }
]

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    wage: Float
    vip: Boolean
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

  # Pontos de entrada da sua API
  type Query {
    hello: String!
    currentTime: Date!
    loggedUser: User
    featuredProduct: Product
    lotteryNumbers: [Int!]!
    users: [User]
    user(id: ID): User
  }
`

const resolvers = {
  User: {
    wage (user) {
      return user.real_wage
    }
  },
  Product: {
    priceWithDiscount (product) {
      if (product.discount) {
        const priceWithDiscount =
          product.price - product.price * (product.discount / 100)
        return priceWithDiscount
      }

      return product.price
    }
  },
  Query: {
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
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})

const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const getShows = require('./db')

var schema = buildSchema(`
  type Query {
    shows: [Show]!
  }

  type Show {
    title: String!,
    seasons: [Season]! 
  }

  type Season {
    name: String!,
    episodes: [Episode]!
  }

  type Episode {
    title: String!
    description: String!
  }
`)

var app = express()

app.use('/shows', graphqlHTTP({
    schema,
    rootValue: getShows(),
    graphiql: true
}))

app.listen(4000)

console.log('Running a GraphQL API server at localhost:4000/shows')
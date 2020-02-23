import ApolloClient from "apollo-boost"
import fetch from "cross-fetch"

const client = new ApolloClient({
  uri: process.env.LVC_COMMENTS_ENDPOINT,
  fetch,
  headers: {
    "x-hasura-admin-secret": process.env.LVC_COMMENTS_SECRET,
  },
})

export default client

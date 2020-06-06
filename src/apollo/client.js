import ApolloClient from "apollo-boost";
import fetch from "cross-fetch";

const client = new ApolloClient({
  uri: "https://lvc-comments.herokuapp.com/v1/graphql",
  fetch,
  headers: {
    "content-type": "application/json",
  },
});

export default client;

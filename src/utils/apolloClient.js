import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const apolloUri = process.env.EXPO_PUBLIC_APOLLO_URI;

if (!apolloUri) {
  throw new Error(
    "Apollo server URI is missing. Set EXPO_PUBLIC_APOLLO_URI in the .env file."
  );
}

const httpLink = createHttpLink({
  uri: apolloUri,
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;

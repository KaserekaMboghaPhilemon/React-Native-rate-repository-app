import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";

const apolloUri =
  Constants.expoConfig?.extra?.apolloUri ?? Constants.manifest?.extra?.apolloUri;

if (!apolloUri) {
  throw new Error(
    "Apollo server URI is missing. Set extra.apolloUri in the Expo app config."
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

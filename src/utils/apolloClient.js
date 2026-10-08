import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const createApolloClient = (authStorage) => {
  const apolloUri = process.env.EXPO_PUBLIC_APOLLO_URI;

  if (!apolloUri) {
    throw new Error(
      "Apollo server URI is missing. Set EXPO_PUBLIC_APOLLO_URI in the .env file."
    );
  }

  const httpLink = createHttpLink({
    uri: apolloUri,
  });

  const authLink = setContext(async (_, { headers }) => {
    const accessToken = await authStorage.getAccessToken();

    return {
      headers: {
        ...headers,
        ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

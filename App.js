import { ApolloProvider } from "@apollo/client";
import Main from "./src/components/Main";
import apolloClient from "./src/utils/apolloClient";
import { NativeRouter } from "react-router-native";

const App = () => (
  <ApolloProvider client={apolloClient}>
    <NativeRouter>
      <Main />
    </NativeRouter>
  </ApolloProvider>
);

export default App;

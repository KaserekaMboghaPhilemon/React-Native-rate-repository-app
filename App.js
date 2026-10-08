import { ApolloProvider } from "@apollo/client";
import Main from "./src/components/Main";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import createApolloClient from "./src/utils/apolloClient";
import { NativeRouter } from "react-router-native";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => (
  <ApolloProvider client={apolloClient}>
    <AuthStorageContext.Provider value={authStorage}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </AuthStorageContext.Provider>
  </ApolloProvider>
);

export default App;

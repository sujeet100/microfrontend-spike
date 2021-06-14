import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import store from '../app/store'
import { Provider } from 'react-redux'
import { useApollo } from "../lib/apolloClient";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
      <Provider store={store}>
          <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
          </ApolloProvider>
      </Provider>
  )
}

export default MyApp

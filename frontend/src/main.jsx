import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast"
import { StrictMode } from 'react'
import GridBackground from './components/ui/GridBackground'
import configs from "./config";
import App from './App.jsx'
import './styles/index.css'

const htmlRoot = document.getElementById('root');
const reactRoot = createRoot(htmlRoot);

const client = new ApolloClient({
  // TODO => Update the uri on production
  uri: configs.graphqlUrl, // The URL of our GraphQL server.
  cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
  credentials: "include", // This tells Apollo Client to send cookies along with every request to the server.
});

reactRoot.render(

  <StrictMode>
    <BrowserRouter>
      <GridBackground>
        <ApolloProvider client={client}>
          <App />
          <Toaster />
        </ApolloProvider>
      </GridBackground>
    </BrowserRouter>
  </StrictMode>,
)
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Renterportal from './components/Renterportal';
import Ownerportal from './components/Ownerportal';
import './styles/app.css'

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div>
            <Navbar />
          </div>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Renterportal" element={<Renterportal />} />
              <Route path="/Ownerportal" element={<Ownerportal />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

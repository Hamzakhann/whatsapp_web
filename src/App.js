import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
    <Router>
    <div>
      <Route axact path="/" exact component={Home} />
      <Route axact path='/login' exact component={Login} />
    </div>
    </Router>
    </AuthContextProvider>
  );
}

export default App;

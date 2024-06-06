import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Profile from './components/Authentication/Profile';
import BookDetails from './components/Book/BookDetails';
import Bookshelf from './components/Bookshelf/Bookshelf';
import NotFound from './components/Common/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/book/:id" component={BookDetails} />
        <Route path="/bookshelf" component={Bookshelf} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './page/Home'
import Detail from './page/Detail'
import Cart from './page/Cart'
import Admin from './page/Admin'
import Error from './page/Error'
import Navbar from './component/Navbar'
import Search from './component/Search'
import React from 'react'

function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Search />
            <Home />
          </Route>
          <Route path="/admin">
            <Navbar />
            <Admin />
          </Route>
          <Route path="/detail/:id">
            <Navbar />
            <Detail />
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
